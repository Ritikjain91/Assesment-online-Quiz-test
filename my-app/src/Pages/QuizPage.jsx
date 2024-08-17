
import React from 'react';
import Header from '../Components/Header/Header';
import QuestionSection from '../Components/QuestionSection/QuestionSection';
import NavigationPanel from '../Components/NavigationPanel/NavigationPanel';
import Footer from '../Components/Footer/Footer';
import { Box, Grid, Container } from '@mui/material';
import NavBar from '../Components/NavBar/NavBar'
import Logo from '../Components/Logo/Logo';




const QuizPage = () => {
  return (
    <Box>
        <NavBar/>
        <Box my={3}  sx={{   display: 'flex',justifyContent: 'center',height:"50px" }} >
        <Logo/>
      </Box>
      <Header />
    
      <Container maxWidth="lg">

        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={9}>
            <QuestionSection />
          </Grid>
          <Grid item xs={12} md={3}>
            <NavigationPanel />
          </Grid>
        </Grid >
        <Box display='flex' >
        <Footer />
        </Box>

      </Container>
    
    </Box>
  );
};

export default QuizPage;
