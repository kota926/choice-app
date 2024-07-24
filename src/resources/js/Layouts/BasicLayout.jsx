import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { Link } from '@inertiajs/react';


export default function Basic({ children }) {
  return (
    <div style={{backgroundColor: "#f5f5f5", minHeight: '100vh'}}>
        <CssBaseline></CssBaseline>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link as='div' href={route('home')}>短答式試験</Link>
          </Typography>
          <Button href='/login' color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  );
}