import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';





export default function ButtonAppBar() {
  return (
    <Box style={{height:"30px"}}>
      <AppBar position="static" style={{
        backgroundColor: 'darkblue',
        height:'30px' ,
      }}
>
      <Toolbar  sx={{ display: 'flex', justifyContent: 'flex-end',position:"relative",bottom:"1em"  }}>
        <Typography >
    <span><PersonIcon  sx={{backgroundColor:"green"}}/>     Home</span> 

        </Typography>
      </Toolbar>
    </AppBar>
   

    
    </Box>
  );
}