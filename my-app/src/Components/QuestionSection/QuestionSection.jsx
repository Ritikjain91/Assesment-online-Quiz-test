import React from 'react';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button, Stack, Grid, Tooltip } from '@mui/material';

const QuestionSection = () => {
  return (
    <Box>
      <Button fullWidth>
        <Grid container alignItems="center">
          <Grid item xs={5}>
            <Typography variant="h5" sx={{ fontWeight: 'bolder' }} gutterBottom style={{ color: 'black' }}>
              Question 3
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <Tooltip title="Show more details">
                <ArrowCircleDownRoundedIcon 
                  style={{ 
                    transform: 'scale(2)', 
                    backgroundColor: "blue", 
                    color: 'white', 
                    borderRadius: "50px",
                    marginLeft:"80%" 
                  
                  }} 
                />
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </Button>

      <Box 
        border="1px solid #e0e0e0" 
        borderRadius={2} 
        p={2} 
        mt={2} 
        height={200} 
        overflow="scroll"

      >
        <Grid container wrap="nowrap">
          <Grid item xs={12} md={7} pr={{ xs: 0, md: 2 }}>
            <Box pb={2} borderBottom="1px solid #e0e0e0" sx={{ borderRight: 1 }}>
              <Typography variant="body1" paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia tenetur at, porro ab voluptas nemo? Aperiam quibusdam vitae animi fugiat ducimus, quo error non ea quas quis, voluptates dolorem.
                Ratione natus aliquid sequi odio sint repellat voluptate quia nam dolor vero omnis numquam temporibus error cupiditate itaque praesentium qui soluta non, sit totam voluptatem autem! Vel illo sint natus?
                Dignissimos, magnam quis? Assumenda molestiae earum eveniet praesentium consequuntur alias porro facere minima dicta, quia distinctio nam, veniam voluptatem fugit, tenetur quo nesciunt accusantium quisquam magni consectetur labore sint dolorum!
              </Typography>
            </Box>

            <Box pt={2} pb={2} borderBottom="1px solid #e0e0e0">
              <Typography variant="body2" color="textSecondary">
                * Please select the most appropriate answer from the options provided.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} pt={{ xs: 2, md: 0 }}>
            <RadioGroup name="options" row>
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
          </Grid>
        </Grid>
      </Box>

      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        mt={3} 
        spacing={1} 
        sx={{ width: '100%' }}
      >
        <Button variant="contained" color="success" size="large" sx={{ flexGrow: 1 }}>
        Save & Next
        </Button>
        <Button variant="outlined" size="large" sx={{ flexGrow: 1 }}>
          Clear
        </Button>
        <Button variant="contained" color="primary" size="large" sx={{ flexGrow: 1 }}>
          Save & Mark for Review
        </Button>
        <Button 
          variant="outlined" 
          sx={{ 
            backgroundColor: "orange", 
            borderColor: "orange", 
            color: "white",
            width: { xs: '100%', sm: 'auto' },
            height: '50px'
          }}
        >
          Mark for Review & Next
        </Button>
      </Stack>

    </Box>
  );
};

export default QuestionSection;
