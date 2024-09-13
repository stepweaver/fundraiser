import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton, Typography } from '@mui/material';
import { CookieOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../state';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display='flex'
      alignItems='center'
      width='100%'
      height={{ xs: 'auto', sm: '60px' }}
      backgroundColor='rgba(0, 177, 64, 0.95)'
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'
      padding={{ xs: '10px 0', sm: '0' }}
    >
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' }, fontSize: { xs: '16px', sm: '24px' } }}
          color='white'
          textAlign={{ xs: 'center', sm: 'left' }}
        >
          MARY FRANK PTO FUNDRAISER
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='flex-end'
          columnGap='20px'
          zIndex='2'
          marginTop={{ xs: '10px', sm: '0' }}
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
              <CookieOutlined fontSize="inherit" />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
