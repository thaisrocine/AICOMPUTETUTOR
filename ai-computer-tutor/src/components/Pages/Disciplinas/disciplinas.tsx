import React, { useState } from 'react';
import AppSideBar from '../../Geral/AppSideBar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Disciplinas = () => {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel: React.SetStateAction<string>) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <>
      <h1>Disciplinas</h1>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={3}>
          <AppSideBar />
        </Grid>
        <Grid item xs={10} sm={9}>
          <div style={{ paddingLeft: '20px' }}>
            <Typography
              variant="h4"
              component="div"
              style={{
                color: '#2E8BE8',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: '40px',
              }}
            >
              DISCIPLINAS 
            </Typography>
            <Divider
              style={{
                width: '100%',
                height: '0.05px',
                backgroundColor: '#E8E6E6',
                marginBottom: '20px',
              }}
            />


            <Accordion
              expanded={expanded === 'primeiro período'}
              onChange={handleChange('primeiro período')}
            >
              <AccordionSummary>
                <Typography>1° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell> FUND DE MATEMÁTICA P/ C.DA COMPUTAÇÃO I </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>INTRODUÇÃO À COMPUTAÇÃO </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>LABORATÓRIO DE PROGRAMAÇÃO I</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PROGRAMAÇÃO I</TableCell>
                      </TableRow>

                   

                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'segundo período'}
              onChange={handleChange('segundo período')}
            >
              <AccordionSummary>
                <Typography>2° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                 
                    <TableBody>
                    
                        
                    

                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>CÁLCULO DIFERENCIAL E INTEGRAL I</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>FUND DE MATEMÁTICA P/ C.DA COMPUTAÇÃO II</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>LABORATÓRIO DE PROGRAMAÇÃO II</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PROGRAMAÇÃO II</TableCell>
                      </TableRow>
                     
                          

                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'terceiro período'}
              onChange={handleChange('terceiro período')}
            >
              <AccordionSummary>
                <Typography>3° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>CÁLCULO DIFERENCIAL E INTEGRAL II</TableCell>
                      </TableRow>
                      
                    </TableHead>
                    <TableBody>
        
    
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>FUND DE MATEMÁTICA P/ C.DA COMPUTAÇÃO II</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ÁLGEBRA LINEAR I</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ESTRUTURA DE DADOS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>LABORATORIO DE ESTRUTURA DE DADOS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>LÓGICA PARA COMPUTAÇÃO</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>TEORIA DOS GRAFOS</TableCell>
                      </TableRow>
                    
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'quarto período'}
              onChange={handleChange('quarto período')}
            >
              <AccordionSummary>
                <Typography>4° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>	BANCO DE DADOS I</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>	INTRODUÇÃO À PROBABILIDADE</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>LAB.DE ORG.E ARQUITETURA DE COMPUTADORES</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ORGANIZAÇÃO E ARQUIT. DE COMPUTADORES</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PARADIGMAS DE LINGUAGEM DE PROGRAMAÇÃO</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PROJETO DE SOFTWARE</TableCell>
                      </TableRow>
                      
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'quinto período'}
              onChange={handleChange('quinto período')}
            >
              <AccordionSummary>
                <Typography>5° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                   
                    <TableBody>
                     
                
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ENGENHARIA DE SOFTWARE</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ANÁLISE DE SISTEMAS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ESTATÍSTICA APLICADA</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>REDES DE COMPUTADORES</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>SISTEMAS OPERACIONAIS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>TEORIA DA COMPUTAÇÃO</TableCell>
                      </TableRow>
                     

                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'sexto período'}
              onChange={handleChange('sexto período')}
            >
              <AccordionSummary>
                <Typography>6° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                
                    <TableBody>
                    <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>METODOLOGIA CIENTÍFICA</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PROGRAMAÇÃO CONCORRENTE	</TableCell>
                      </TableRow>
                    
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'sétimo período'}
              onChange={handleChange('sétimo período')}
            >
              <AccordionSummary>
                <Typography> 7° PERÍODO - DISCIPLINAS OBRIGATÓRIAS </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                    
                    </TableHead>
                    <TableBody>
                     
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ANÁLISE E TÉCNICA DE ALGORITMOS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>COMPILADORES</TableCell>
                      </TableRow>
                     
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'oitavo período'}
              onChange={handleChange('oitavo período')}
            >
              <AccordionSummary>
                <Typography>8° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
               
                    <TableBody>
                     
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PROJETO DE TRAB. DE CONCLUSAO DE CURSO</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PROJETO EM COMPUTAÇÃO I</TableCell>
                      </TableRow>
                     

                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'nono período'}
              onChange={handleChange('nono período')}
            >
              <AccordionSummary>
                <Typography>9° PERÍODO - DISCIPLINAS OBRIGATÓRIAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                  
                    <TableBody>

                    <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>PROJETO II</TableCell>
                      </TableRow>

                   
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>TRABALHO DE CONCLUSÃO DE CURSO</TableCell>
                      </TableRow>

                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            

            {/* Nomes de Carros */}
            <Accordion
              expanded={expanded === 'optgerais'}
              onChange={handleChange('optgerais')}
            >
              <AccordionSummary>
                <Typography>DISCIPLINAS OPTATIVAS GERAIS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>LÍNGUA PORTUGUESA</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>LIBRAS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ECONOMIA</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>DIREITO E CIDADANIA</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ADMINISTRACAO E EMPREENDEDORISMO</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>


            <Accordion
              expanded={expanded === 'optespecific'}
              onChange={handleChange('optespecific')}
            >
              <AccordionSummary>
                <Typography>DISCIPLINAS OPTATIVAS ESPECÍFICAS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>	TECC(PROCESSAMENTO DE LINGUAGEM NATURAL)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ALGORITMOS AVANÇADOS I</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>ARQUITETURA DE SOFTWARE</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>BANCO DE DADOS II</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>GERÊNCIA DE REDES</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>SISTEMAS DE APOIO À DECISÃO</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>VERIFICAÇÃO E VALIDAÇÃO DE SOFTWARE</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>	TECC(PROGRAMAÇÃO PARA WEB)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox
                            icon={<CheckCircleIcon />}
                            checkedIcon={<CheckCircleIcon />}
                          />
                        </TableCell>
                        <TableCell>	TECC(TRANSFORMAÇÃO DIGITAL)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Disciplinas;
