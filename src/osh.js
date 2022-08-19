import React, { Component } from 'react'
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
  } from 'react-reflex'
  import { Helmet } from "react-helmet"

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
            <div>
            <Helmet>
                <style>{'body { background-color: #081217; }'}</style>
            </Helmet>
            <ReflexContainer orientation="vertical">
            <ReflexElement className="left-pane">
                <div className="pane-content">
                    <div id="status" style={{color:"white"}}>Connection failed. Somebody may be using the socket.</div>
                    <canvas id="msg" width="960" height="720"/>
                </div>
            </ReflexElement>
            <ReflexSplitter/>
            <ReflexElement className="right-pane">
                <div className="pane-content" style={{color:"white"}}>
                     Incompliance
                </div>
            </ReflexElement>
            </ReflexContainer>
            </div>
        );
    }
  }
  
  export default Osh;
  
