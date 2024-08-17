import React from 'react';
import { AppBar, Toolbar, Typography, Box, Select, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Image1 from '../../Images/bgacadlix.jpg';

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="static"
      color="default"
      elevation={2}
     
    >
     
     <Toolbar
  sx={{
    height: isSmallScreen ? 250 : 150,
    flexDirection: isSmallScreen ? 'column' : 'row',
    alignItems: isSmallScreen ? 'flex-start' : 'center',
    backgroundImage: `url(${Image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>

        <AccountBoxIcon sx={{ width: isSmallScreen ? 80 : 150, height: isSmallScreen ? 80 : 150 }} />

        <Box ml={isSmallScreen ? 0 : 2} mt={isSmallScreen ? 1 : 0}>
  <Typography variant={isSmallScreen ? 'subtitle1' : 'subtitle1'}>
    Candidate Name: <span style={{ color: 'orange' }}>Sudhanshu</span>
  </Typography>
  <Typography variant={isSmallScreen ? 'body2' : 'subtitle1'}>
    Exam Name: <span style={{ color: 'orange' }}>Nta quiz</span>
  </Typography>
  <Typography variant={isSmallScreen ? 'body2' : 'subtitle1'}>
    Subject Name: <span style={{ color: 'orange' }}>Test</span>
  </Typography>
  <Typography variant={isSmallScreen ? 'body2' : 'subtitle1'}>
    Remaining Time: <span>00:00:00</span>
  </Typography>
</Box>


        <Box
          ml={isSmallScreen ? 0 : 'auto'}
          mt={isSmallScreen ? 1 : 0}
          display="flex"
          alignItems="center"
          width={isSmallScreen ? '100%' : 'auto'}
        >
          <Select defaultValue="English" variant="outlined" size="small" fullWidth={isSmallScreen}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
