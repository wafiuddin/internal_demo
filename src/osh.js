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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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

  class Incompliance extends Component{

        constructor(props) {
          super(props);
          this.state = {
            itemData: [],
            path: "",
            status: "",
            missing:"",
            time_taken:"",
            address:"",
            loaction:""
          };
          this.canvas = React.createRef();
      }

          
      
        render() {
          let url = "ws://" + window.location.hostname + ":8686";
        const socket = new WebSocket(url);
         socket.addEventListener('message', (e) => {
          console.log(e.data)
          let json = JSON.parse(e.data)
          this.setState({ path: "http://localhost:9000/"+json.ID});
          this.setState({address:this.state.path+"?"+Math.random().toExponential()})
          this.setState({ status: json.status});
          this.setState({ missing: json.missing});
          this.setState({location:json.location})
          this.setState({ time_taken: json.time_taken});
          if (!this.state.itemData.includes(this.state.path)) {
              this.state.itemData.push(this.state.path)
          }


          

         });
          return (
            <div>
            <Card>
            <CardMedia
              component="img"
              height="450"
              width="400"
              image={this.state.address}
              style={{objectFit:"contain"}}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              <Typography variant="h8" color="inherit" component="div">Status : {this.state.status}</Typography>
              <Typography variant="h8" color="inherit" component="div">Missing PPE: {this.state.missing} </Typography>
              <Typography variant="h8" color="inherit" component="div">Time: {this.state.time_taken}</Typography>
              <Typography variant="h8" color="inherit" component="div">Location: {this.state.location}</Typography>
              </Typography>
            </CardContent>
          </Card>
          <br></br>
            <div>
              <ImageList  cols={3} gap={8}>
                {this.state.itemData.map((item) => (
                    <ImageListItem key={item}>
                      <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item}
                        loading="lazy"
                      />
                    </ImageListItem>
                )).reverse()}
              </ImageList>
            </div>
            </div>
          );
        }
    
  }

class Osh extends Component {
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
                    <canvas ref={this.canvas} width="960" height="720" style={{objectFit:"contain"}}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Typography variant="h6" color="inherit" component="div">Non-Compliance</Typography>
                    <Incompliance ></Incompliance>
                    </Item>
                </Grid>
            </Grid>
            </Box>
            </ThemeProvider>
        );
    }
  }
  
  export default Osh;
  
