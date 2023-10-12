import React from 'react';
import AppSideBar from '../../Geral/AppSideBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => (
  <>
    <h1>About</h1>
    <Grid container spacing={2}>
      <Grid item xs={10} sm={3}>
        <AppSideBar />
      </Grid>
      <Grid item xs={10} sm={15}>
        <div style={{ paddingLeft: '20px' }}>
          <Typography
            variant="h4"
            component="div"
            style={{
              color: '#2E8BE8',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: '40px', // Adicione essa linha para afastar o elemento do AppSideBar
            }}
          >
            About

            <Divider style={{ width: '100%', height: '0.05px', backgroundColor: '#E8E6E6' }} />
            
          </Typography>
          
       
          
        </div>
      </Grid>
    </Grid>
  </>
);

export default About;
