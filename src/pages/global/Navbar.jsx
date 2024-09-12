import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, Typography, IconButton } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      display='flex'
      alignItems='center'
      width='100%'
      height='60px'
      backgroundColor='rgba(0, 177, 64, 0.95)'
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'
    >
      <Box
        width='80%'
        marfing='auto'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box
          onClick={() => navigate('/')}
          sx={{
            '&:hover': { cursor: 'pointer' },
            fontSize: { xs: '16px', sm: '24px' }
          }}
          color='white'
        >
          MARY FRANK PTO FUNDRAISER
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          columnGap='20px'
          zIndex='2'
        >
          <Typography
            variant='h6'
            color='white'
            sx={{ marginRight: '20px', fontSize: { xs: '14px', sm: '20px' } }}
          >
            Leah Weaver, 3rd Grade
          </Typography>
          <Badge
            badgeContent={cart.length}
            color='secondary'
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '16px',
                minWidth: '16px',
                backgroundColor: 'black',
                color: 'white'
              }
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'white', fontSize: { xs: '20px', sm: '26px' } }}
            >
              <ShoppingBagOutlined fontSize="inherit" />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;