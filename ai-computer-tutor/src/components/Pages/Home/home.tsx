import AppSideBar from '../../Geral/AppSideBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';

const Home = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Grid container spacing={1}>
      <Grid item xs={5} sm={3} style={{ marginRight: '1px' }}>
        <AppSideBar />
      </Grid>
      <Grid item xs={5} sm={9}>
        <div style={{ paddingLeft: '45px', marginTop: '1vh' }}>
          <Typography
            variant="h4"
            component="div"
            style={{
              color: '#2E8BE8',
              fontSize: '2vh',
              fontWeight: 'bold',
              marginBottom: '1vh',
            }}
          >
            Boas vindas ao AIComputeTutor
          </Typography>

          <div style={{ marginTop: '9vh', paddingLeft: '30vh' }}>
            <Card>
              <CardContent>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12}>
                    <div style={{ textAlign: 'center', marginBottom: '1vh' }}>
                      <Typography
                        variant="h4"
                        style={{
                          fontSize: '2vh',
                          color: '#2E8BE8',
                          fontWeight: 'bold',
                          borderSpacing: '1vh',
                        }}
                      >
                        6 Vantagens de Utilizar IA como tutora
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <div style={{ textAlign: 'center' }}>
                  <Grid container spacing={5}>
                    {[
                      "APRENDIZAGEM CONSTANTE",
                      "FEEDBACK CONSTANTE",
                      "BAIXO CUSTO",
                      "FÁCIL USO",
                      "TUTOR AUTOMATIZADO",
                      "ASSISTÊNCIA 24 HORAS",
                    ].map((vantagem, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Card style={{ margin: '5vh' }}>
                          <CardContent
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              height: '3vh',
                            }}
                          >
                            <Typography
                              variant="h6"
                              style={{
                                fontSize: '1.7vh',
                                color: '#2E8BE8',
                                fontWeight: 'bold',
                                flex: 1,
                              }}
                            >
                              {vantagem}
                            </Typography>
                            <CheckCircleIcon fontSize="large" style={{ color: 'green' }} />
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </CardContent>
            </Card>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4vh' }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#58BCC2',
              color: 'white',
              borderRadius: '25px',
              fontSize: '1.2vh',
              padding: '1.5vh 3vh',
              fontWeight: 'bold',
            }}
          >
            COMECE AGORA A UTILIZAR NOSSOS SERVIÇOS
          </Button>
        </div>
        </div>
          </div>
   

      
      </Grid>
   
    </Grid>
 
  </div>
);

export default Home;
