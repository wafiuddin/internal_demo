import React, { Component } from 'react'
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
  } from 'react-reflex'
  import { Helmet } from "react-helmet"

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
            <div>
            <Helmet>
                <style>{'body { background-color: #081217; }'}</style>
            </Helmet>
            <ReflexContainer orientation="vertical">
            <ReflexElement className="left-pane">
                <div className="pane-content" style={{color:"white"}}>Livestream
                    <div id="status" style={{color:"white"}}>Connection failed.</div>
                    <canvas ref={this.canvas} width="960" height="720"/>
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
  
