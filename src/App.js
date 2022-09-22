import logo from './logo.svg';
import './App.css';
import Particle from "react-particles-js";
import particlesConfig from "./asset/particlesConfig.json";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function osh (){
  window.location="/osh"
  }
  
function face (){
  window.location="/face"
}

function App() {
  return (
    <><Particle params={particlesConfig} className="App-particles__container" />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Aerodyne A.I
        </h2>
        <p>Demo Catalogue</p>
        <h6>Choose From the Option Below:</h6>
        <ButtonGroup variant="contained" color='inherit'>
      <Button onClick={(event)=>osh(event)} style={{backgroundColor: '#282c34',}}><img alt="OSH"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAflJREFUeF7tmVFuwzAMQ5v7HzpDh3UwjNSiKVFxYO03TSQ+UrKBHa/N/47N9b8KQCVgcwI1ApsHoJZg+gic53mOUnccR2pPqcUs8R8wmRDSAKDisyEUgIxTYNb9zBTIE8CKz4IgA+AV3idTtRjDAUQLV4MIBaAWrxiLMABZ4qMhhADIFh8JwQ3gLvFREFwAvOI/mz3qO8ydRgqgPbquRI4AWO+2Yj1HJA3Acu2qqfad/vno2VssUw9JhASAx5FR0yMIbE0KgMoNyzFF3XAArBOW+M/z6BQUAJR8+7tvLqjdt1LA1IcTYM0fA1L5DgoDAvA08TO3xAJgxfCp7qMpMBOwPQDkGmql6K7nyCI0E1AA/ux72igg7r+lQQnoI2zBQIvPjoaibgGYdcHaCSr3rWvwb5yJ/yyHJoBpINIApn4oAPTywYi2krdEAnphjCNXcKzl5wEvSYCnoUcAQOIYBUHpPn0PQDZy6yQ7CmrxbgBoEpQA2G//J5TdyOrboeW+V3g4ACQNaNNZ4kNGoE2C1bi1GL3vM2mmjsFRIVQE0yx72RnVCgeAjMIq4sNHgBkHFAa6P9DvSZbg7MmANqsSL03A7GXpCoZSeEoCPCORIT4lAd9i3p8WWYL7fiSnADrbK/yuAKzgwp09VALupL9C7UrACi7c2cP2CfgBCsQkULZQrGwAAAAASUVORK5CYII="/></Button>
      <Button onClick={(event)=>face(event)} style={{backgroundColor: '#282c34',}}><img alt="Face Recogniton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAApdJREFUeF7tm9tywyAMROv//2hn7AkJZQDtLuLilr70BbB0WK3ASY6f/XcTOGIO53meXlyO4/i1tte6vWL8BOv5gJvwA0DEcd4gvCE8CUSIdYN4q3eD2CC+9n35mbsieplk2nU8fQ0CMSoxr/ZaWqcGbgoIdCe9N2AJEGjypd30gDIVRCuAFEwLkGkgvCEEKCqM4SB6AWhVx1AQoyAo6hgGYjQEFsYQELMgMDA2iDet7iBmqwFVxQbhoQirZ6+ihlZVmHeNfwdCufmtpgZUFcX7jAKh13tONZZ4nqXiDcKgLH/2sEsDaEceElfXeHxpXAl4qOzRIOLgW2EsA4LZ2VrQKpClQKj1nZvHAvmzINjX80NBWDc5T0WwIK7xCgzpHIGAQCXNftqGjJ8CIjVHJNDckbgFXCkGRpnNiqgFYSWX7hwzPh67PAhmR9ixjwOR22WrhpE5y4GwPngpyb0EAx2PGDajMskjau8j0LrvBcJSm/v7iBKMmSBUCPfZg5EPcrhBQFgBKx7Rmkd3ECHAkJwFAR2fmuVjQLQGms7vAgJ1aqU0vAGkimHuFrU8q9+qY2UcgkTnqZDShNDnySBU2khr7D2mVkq5s4/5PUuVdm5erRsgnSLXstX40oufG4g0SBRErTysNVAItQNgUH03ELWyYm6ZMSjVG4aDYKXLJMaMzanMupu4KiLX2hjDRdqzut4UECUpMjXttUZpc7qaJduyFAl7nT2GgrBMikmKVRO7KV08gt1ptoUyAJcoDdT8cic9JdnanGlm6Z1I63rNINgAWmsZfZ51KEPXCe3Y9AhmwdSJ1bmqxNXnXZu3QeyfO371sxXxZvEB4XnwCZx7maanSQajvP/HBuP5kCeAiGN0eZ2vuvVK814S4gRwE7AdAAAAAABJRU5ErkJggg=="/></Button>
    </ButtonGroup>
      </header>
    </div>
    </>
  );
}

export default App;
