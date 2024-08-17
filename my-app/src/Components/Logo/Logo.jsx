import React from 'react';
import { Box } from '@mui/material';
import Acadlixlogon from '../../Images/Acadlixlogon.png'

const Logo = ({  altText = "Company Logo" }) => {
  return (
    <Box
      component="img"
      src={Acadlixlogon}
      alt={altText}
      
    />
  );
};

export default Logo;
