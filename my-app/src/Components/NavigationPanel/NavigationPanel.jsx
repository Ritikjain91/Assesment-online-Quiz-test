import React from 'react';
import { Box, Typography, Stack, Grid, useMediaQuery } from '@mui/material';

const NavigationPanel = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const numberStyles = {
    notVisited: {
      backgroundColor: '#d3d3d3', color: '#000', display: 'inline-block', width: isMobile ? '30px' : '50px', height: isMobile ? '30px' : '50px', textAlign: 'center', lineHeight: isMobile ? '30px' : '40px', fontSize: isMobile ? '0.8rem' : '1.2rem', borderRadius: 1, marginRight: '0.23em'
    },
    notAnswered: {
      padding: '4px 12px', textAlign: 'center', lineHeight: isMobile ? '30px' : '40px', width: isMobile ? '45px' : '60px',
      height: isMobile ? '45px' : '60px', backgroundColor: '#f44336', clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)', marginRight: '0.23em',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: isMobile ? '0.8rem' : '1.2rem', border: '1px  #000',
    },
    answered: {
      backgroundColor: '#4caf50', color: '#fff', padding: '4px 12px', display: 'inline-block', textAlign: 'center', lineHeight: isMobile ? '30px' : '40px', fontSize: isMobile ? '0.8rem' : '1.2rem', width: isMobile ? '45px' : '60px', marginRight: '0.23em',
      height: isMobile ? '45px' : '60px', clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)', alignItems: 'center', justifyContent: 'center', border: '1px  #000',
    },
    markedForReview: {
      backgroundColor: '#9c27b0', color: '#fff', borderRadius: '50%', display: 'inline-block', width: isMobile ? '25%' : '40%', height: isMobile ? '70%' : '90%', textAlign: 'center', lineHeight: isMobile ? '30px' : '40px', fontSize: isMobile ? '0.8rem' : '1.2rem', marginRight: '0.23em',
    },
    answeredAndMarked: {
      backgroundColor: '#673ab7', color: '#fff', padding: '4px 12px', borderRadius: '50%', display: 'inline-block', width: isMobile ? '20%' : '25%', height: isMobile ? '70%' : '90%', textAlign: 'center', lineHeight: isMobile ? '30px' : '40px', fontSize: isMobile ? '0.8rem' : '1.2rem', marginRight: '0.23em',
    },
  };

  const TrapeziumButtonStyle = {
    width: isMobile ? '50px' : '70px',
    height: isMobile ? '45px' : '60px',
    backgroundColor: '#f44336',
    clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: isMobile ? '0.8rem' : '1.2rem',
    border: '1px  #000',
  };

  const buttonContainerStyle = {
    transform: 'skew(20deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isMobile ? '80%' : '10%',
    height: '100%',
  };

  return (
    <Box>
      <Box p={2} border="2px dotted #000" borderRadius={2} position="relative" width={isMobile ? '92vw' : '25vw'} height={isMobile ? '200px' : '250px'}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ fontSize: isMobile ? '0.8rem' : '1rem', display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={numberStyles.notVisited}>0</Box> Not Visited
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ fontSize: isMobile ? '0.8rem' : '1rem', display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={numberStyles.notAnswered}>4</Box> Not Answered
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ fontSize: isMobile ? '0.8rem' : '1rem', display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={numberStyles.answered}>0</Box> Answered
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ fontSize: isMobile ? '0.8rem' : '1rem', display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={numberStyles.markedForReview}>0</Box> Marked for Review
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ fontSize: isMobile ? '0.8rem' : '1rem', display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={numberStyles.answeredAndMarked}>0</Box> Answered and Marked for Review (will be considered for evaluation)
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Stack direction="row" spacing={isMobile ? 2 : 4} mt={3} display="flex" justifyContent="center" sx={{ position: 'relative' }}>
        {[1, 2, 3, 4].map((num) => (
          <Box key={num} sx={TrapeziumButtonStyle}>
            <Box sx={buttonContainerStyle}>{num}</Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default NavigationPanel;
