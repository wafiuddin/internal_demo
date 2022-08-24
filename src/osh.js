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

  class Time extends Component{
        constructor(props) {
          super(props);
          this.state = {
            date: new Date()
          };
        }
      
        componentDidMount() {
          this.timerID = setInterval(
            () => this.tick(),
            6000
          );
        }
      
        componentWillUnmount() {
          clearInterval(this.timerID);
        }
      
        tick() {
          this.setState({
            date: new Date()
          });
        }
      
        render() {
          return (
            this.state.date.toLocaleTimeString()
          );
        }
  }
  class Incompliance extends Component{

      constructor(props) {
          super(props);
          this.state = {
            path: "http://localhost:9000/pic.jpg"
          };
        }
      
        componentDidMount() {
          this.timerID = setInterval(
            () => this.tick(),
            1000
          );
        }
      
        componentWillUnmount() {
          clearInterval(this.timerID);
        }
      
        tick() {
          let cache = new Date().getMilliseconds().toString()
          this.setState({
            path: "http://localhost:9000/pic.jpg?"+cache
          });
        }
      
        render() {
          return (
            <img src={this.state.path} width="400" height="200"/>
          );
        }
    
  }

class Osh extends Component {
    constructor(props) {
        super(props);
     
        this.canvas = React.createRef();
     }

    

    render(){
        let url = "ws://" + window.location.hostname + ":8585";
        const socket = new WebSocket(url);
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
                    <br></br>
                    <canvas ref={this.canvas} width="960" height="720"/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Typography variant="h6" color="inherit" component="div">Incompliance</Typography>
                    <br></br>
                    <Incompliance></Incompliance>
                    <Typography variant="h8" color="inherit" component="div">Location : Aerodyne Campus</Typography>
                    <Typography variant="h8" color="inherit" component="div">Date: 26 August 2022</Typography>
                    <Typography variant="h8" color="inherit" component="div">Time: <Time></Time></Typography>
                    </Item>
                </Grid>
            </Grid>
            </Box>
            </ThemeProvider>
        );
    }
  }
  
  export default Osh;
  
