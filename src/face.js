import React, { Component } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
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
            path: "",
            name: ""
          };
          this.canvas = React.createRef();
      }

          
      
        render() {
          let url = "ws://" + window.location.hostname + ":8686";
        const socket = new WebSocket(url);
         socket.addEventListener('open', (e) => {
             document.getElementById("status").innerHTML = "Opened";
         });
         socket.addEventListener('message', (e) => {
          let path = JSON.parse(e.data)
          this.setState({ path: "http://localhost:9000/"+path.ID });
          this.setState({ name: path.name});
          let ctx = this.canvas.current.getContext("2d");
             let image = new Image();
             image.src =this.state.path;
             image.addEventListener("load", (e) => {
                 ctx.drawImage(image, 0, 0, this.canvas.current.width, this.canvas.current.height);
             });
          console.log(this.state);
         });
          return (
            <div>
            <canvas ref={this.canvas} width="400" height="600" style={{objectFit:"contain"}}/>
            <Typography variant="h8" color="inherit" component="div">Name : {this.state.name}</Typography>
            <Typography variant="h8" color="inherit" component="div">Date: 26 August 2022</Typography>
            <Typography variant="h8" color="inherit" component="div">Time: <Time></Time></Typography>
            </div>
          );
        }
    
  }

class Face extends Component {
    constructor(props) {
        super(props);
     
        this.canvas = React.createRef();
     }

     returnHome = ()=>{
      window.location='/'
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
                <HomeIcon style={{cursor:"pointer"}} color="inherit" aria-label="home" size= "large" sx={{ mr: 3 }} onClick={this.returnHome}>
                </HomeIcon>
                <Typography variant="h6" color="inherit" component="div">
                 Aerodyne AI
                </Typography>
                </Toolbar>
            </AppBar>
            <br></br>
            </Box>
            <Box sx={{ width: '100%', height:'100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 1 }}>
                <Grid item xs={9}>
                    <Item>
                    <Typography variant="h6" color="inherit" component="div">Livestream</Typography>
                    <canvas ref={this.canvas} width="960" height="820" style={{objectFit:"contain"}}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Typography variant="h6" color="inherit" component="div">Information</Typography>
                    <Incompliance ></Incompliance>
                    </Item>
                </Grid>
            </Grid>
            </Box>
            </ThemeProvider>
        );
    }
  }
  
  export default Face;
  
