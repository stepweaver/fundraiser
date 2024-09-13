import heroImage from '../../assets/cookieHero.jpg';
import { Box, Typography, useMediaQuery } from '@mui/material';

const HeroImage = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box position='relative'>
      <img
        src={heroImage}
        alt='hero'
        style={{
          width: '100%',
          height: '700px',
          objectFit: 'cover',
          backgroundAttachment: 'fixed'
        }}
      />
      <Box
        color='white'
        padding='20px'
        borderRadius='1px'
        textAlign='left'
        backgroundColor='rgb(0, 0, 0, 0.4)'
        position='absolute'
        top='46%'
        left={isNonMobile ? '10%' : '0'}
        right={isNonMobile ? undefined : '0'}
        margin={isNonMobile ? undefined : '0 auto'}
        maxWidth={isNonMobile ? undefined : '240px'}
      >
        <Typography
          color='white'
          sx={{ fontSize: '20px' }}
        >
          - Pre-portioned dough for the perfect cookie.
        </Typography>
        <Typography
          color='white'
          sx={{ fontSize: '20px' }}
        >
          - Easy one step baking!
        </Typography>
        <Typography
          color='white'
          sx={{ fontSize: '20px' }}
        >
          - No Preservatives or fillers added.
        </Typography>
        <Typography
          color='white'
          sx={{ fontSize: '20px' }}
        >
          - Makes 48 - .9 oz. Gourmet Cookies!
        </Typography>
        <Typography
          color='white'
          sx={{ fontSize: '20px' }}
        >
          - Premium brand name ingredients.
        </Typography>
        <Typography
          color='white'
          sx={{ fontSize: '20px' }}
        >
          - Dough may be frozen for up to 6 months.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroImage;
