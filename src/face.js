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
import { ImageList, ImageListItem } from '@mui/material';
import Papa from "papaparse";

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
  class Information extends Component{
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
          this.setState({
            path: "http://localhost:9000/pic.jpg?"+Math.random()
          });
        }
        render() {
          return (
            <div>
            <img src={this.state.path} width="100%" height="400" style={{objectFit:"contain"}} alt="Non-compliance"/>
            <Typography variant="h8" color="inherit" component="div">Name : ----</Typography>
            <Typography variant="h8" color="inherit" component="div">Position: ----</Typography>
            <Typography variant="h8" color="inherit" component="div">Time: ----</Typography>
            </div>
          );
        }
  }

  function Gallery(){return (
    <ImageList sx={{ width: "100%", height: 300 }} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
];

class Face extends Component {
    constructor(props) {
        super(props);
     
        this.canvas = React.createRef();
     }

    returnHome = ()=>{
      window.location='/'
    }


    render(){
      let data
      Papa.parse('http://localhost:9000/testcsv.csv', {
        header: true,
        complete: function(results) {
          console.log(results);
          data = results.data;
        }
      });
        let url = "ws://" + window.location.hostname + ":8585";
        const socket = new WebSocket(url);
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
                    <Information ></Information>
                    <Gallery></Gallery>
                    </Item>
                </Grid>
            </Grid>
            </Box>
            </ThemeProvider>
        );
    }
  }
  
  export default Face;
  
