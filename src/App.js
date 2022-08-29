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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo Catalogue
        </p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={(event)=>osh(event)}>OSH Demo</Button>
      <Button onClick={(event)=>objectDemo(event)}>Object Detection Demo</Button>
    </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
