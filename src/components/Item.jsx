import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, useTheme, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../theme';
import { addToCart } from '../state';

const Item = ({ item, width, onAddToCart }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral }
  } = useTheme();

  const { category, price, name, description, image } = item.attributes;
  const getImageUrl = (formats) => {
    return formats?.medium?.url ||
           formats?.small?.url ||
           formats?.thumbnail?.url ||
           '';
  };
  
  const imageUrl = getImageUrl(image?.data[0]?.attributes?.formats);

  return (
    <Box width={width}>
      <Box
        position='relative'
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        height='300px'
        overflow='hidden'
      >
        <img
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={`http://localhost:5173${imageUrl}`}
        />
        <Box
          display={isHovered ? 'block' : 'none'}
          position='absolute'
          bottom='10%'
          left='0'
          width='100%'
          padding='0 5%'
        >
          <Box display='flex' justifyContent='space-between'>
            <Box
              display='flex'
              alignItems='center'
              backgroundColor={shades.neutral[100]}
              borderRadius='3px'
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
                onAddToCart();
              }}
              sx={{ backgroundColor: shades.primary[300], color: 'white' }}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: shades.secondary[300],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '125px',
          padding: '10px'
        }}
      >
        <Typography variant='h3' fontWeight='bold'>
          {name}
        </Typography>
        <Typography sx={{ fontSize: '13px' }}>{description}</Typography>
        <Typography fontWeight='bold'>${price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
