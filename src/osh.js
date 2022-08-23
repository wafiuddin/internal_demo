import React, { Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from './incompliance';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

class Osh extends Component {
    constructor(props) {
        super(props);
     
        this.canvas = React.createRef();
     }

    

    render(){
        let uri = "ws://" + window.location.hostname + ":8585";
        const socket = new WebSocket(uri);
         socket.addEventListener('open', (e) => {
             document.getElementById("status").innerHTML = "Opened";
         });
         socket.addEventListener('message', (e) => {
             let ctx = this.canvas.current.getContext("2d");
             let image = new Image();
             image.src = URL.createObjectURL(e.data);
             image.addEventListener("load", (e) => {
                 ctx.drawImage(image, 0, 0, this.canvas.current.width, this.canvas.current.height);
             });
         });
        return (
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                </IconButton> */}
                <Typography variant="h6" color="inherit" component="div">
                 OSH Demo
                </Typography>
                </Toolbar>
            </AppBar>
            <br></br>
            </Box>
            <Box sx={{ width: '100%', height:'100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item xs={9}>
                    <Item>
                    <Typography variant="h6" color="inherit" component="div">Livestream</Typography>
                    <canvas ref={this.canvas} width="960" height="720"/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Typography variant="h6" color="inherit" component="div">Incompliance</Typography>
                    <br></br>
                    <Image></Image>
                    </Item>
                </Grid>
            </Grid>
            </Box>
            </ThemeProvider>
        );
    }
  }
  
  export default Osh;