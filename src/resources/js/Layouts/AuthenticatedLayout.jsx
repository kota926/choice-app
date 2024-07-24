import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from '@inertiajs/react';
import axios from 'axios';


export default function Authenticated({ children }) {
    const [ open, setOpen ] = React.useState()

    const logout = ()=>{
        axios.get('/sanctum/csrf-cookie', {
            }).then((res)=>{
                axios.post('logout').then((res) => {
                    // reloadしないとリダイレクトしてくれない。原因不明。reloadしなくてもすむよう要修正
                    window.location.reload()
                })
            })
        
    }

    const toggleDrawer = ()=>{
        setOpen(!open)
    }

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
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link as='div' href={route('home')}>短答式試験</Link>
                </Typography>
                <Button onClick={logout} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <Drawer open={open} onClose={toggleDrawer}>
                <Box>
                    <List>
                        <ListItem divider>
                            <ListItemButton href='home'>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary='ホーム' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton href='table'>
                                <ListItemIcon>
                                    <BorderColorIcon />
                                </ListItemIcon>
                                <ListItemText primary='演習' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem divider>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary='ログアウト' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}