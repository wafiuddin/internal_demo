import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function osh (){
  window.location="/osh"
  }

function objectDemo (){
    window.location="/objectdetection"
    }

function face (){
  window.location="/face"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo Catalogue
        </p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={(event)=>osh(event)}>OSH</Button>
      <Button onClick={(event)=>objectDemo(event)}>Object Detection</Button>
      <Button onClick={(event)=>face(event)}>Face Recognition</Button>
    </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
