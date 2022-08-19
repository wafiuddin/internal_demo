import React, { Component } from 'react'
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
  } from 'react-reflex'

class Osh extends Component {

    componentDidMount = () => {
        let uri = "ws://" + window.location.hostname + ":8585";
       const socket = new WebSocket(uri);
        let msg = document.getElementById("msg");
        socket.addEventListener('open', (e) => {
            document.getElementById("status").innerHTML = "Opened";
        });
        socket.addEventListener('message', (e) => {
            let ctx = msg.getContext("2d");
            let image = new Image();
            image.src = URL.createObjectURL(e.data);
            image.addEventListener("load", (e) => {
                ctx.drawImage(image, 0, 0, msg.width, msg.height);
            });
        });
    }

    render(){
        return (
            <ReflexContainer orientation="vertical">
            <ReflexElement className="left-pane">
                <div>
                    <div id="status">Connection failed. Somebody may be using the socket.</div>
                    <div><canvas id="msg" width="960" height="720"/></div>
                </div>
            </ReflexElement>
            <ReflexSplitter/>
            <ReflexElement className="right-pane">
                <div>
                     Incompliance
                </div>
            </ReflexElement>
            </ReflexContainer>
        );
    }
  }
  
  export default Osh;
  
