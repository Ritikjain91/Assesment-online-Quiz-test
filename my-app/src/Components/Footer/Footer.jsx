import React from 'react';
import { Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      justifyContent={isMobile ? 'center' : 'flex-start'}
      alignItems="center"
      my={5}
      width="100%"
      spacing={isMobile ? 2 : 0}
    >
      <Button variant="outlined" size={isMobile ? 'medium' : 'large'}>
     < KeyboardDoubleArrowLeftIcon />  Back
      </Button>
      <Button variant="outlined" size={isMobile ? 'medium' : 'large'}>
      < KeyboardDoubleArrowRightIcon />  Next
      </Button>
      <Button
        variant="contained"
        size={isMobile ? 'medium' : 'large'}
        color="success"
        sx={{ ml: isMobile ? 0 : "38em", mt: isMobile ? 2 : 0 }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default Footer;
