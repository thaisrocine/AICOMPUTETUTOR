import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

export default function SwipeableTemporaryDrawer() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  const toggleLeftDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown'
    ) {
      return;
    }
    setIsLeftOpen(open);
  };

  const list = (
    <Box sx={{ width: 250 }}>
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, route: '/' },
          { text: 'Disciplinas', icon: <SchoolIcon />, route: '/disciplinas' },
          { text: 'Meu Progresso', icon: <TimelineIcon />, route: '/progress' },
          { text: 'About', icon: <InfoIcon />, route: '/about' },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.icon}
              </Link>
            </ListItemIcon>
            <ListItemText primary={
              <Link to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.text}
              </Link>
            } />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isLeftOpen}
        onClose={toggleLeftDrawer(false)}
        onOpen={toggleLeftDrawer(true)}
      >
        {list}
      </SwipeableDrawer>

      <AppBar position="fixed">
        <Toolbar sx={{ background: '#58BCC2' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleLeftDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <h1>AI ComputerTutor</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
