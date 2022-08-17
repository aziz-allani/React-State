//import { useState } from "react";
import "./App.css";
import React from "react";
//import button from "@mui/material";
import NewComp from "./component/NewComp";
import Count from "./component/Count";


class App extends React.Component {
 state = {
   fullname: "Aziz",
   bio:"************",
   imgSrc:"",
   profession:"Student"
 };

 //handleClick=()=>this.setState({fullname: 'Aziz',
 //bio:'************',
 //profession:'Student'})
styles={fontstyle:"bold",
color:"black",


};

 render() {

  return(
    <>
    <h1 style={this.styles}>Welcome!</h1>
    <NewComp/>
    <Count/>
    </>
  )
}
}
export default App;









