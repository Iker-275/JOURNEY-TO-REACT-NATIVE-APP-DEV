import React from "react";
import Title from "./Title";
import Content from "./Content";


function Tile(props){
    return (<div className="note">
     <Title title={props.title}/>
     <Content content ={props.content}/>
    </div>);
}


export default Tile;