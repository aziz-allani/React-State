import {Component} from "react"
 import bb from "./bb.jpg"
// import bb from "./bb.jpg"
//import { useState} from "react";


class NewComp extends Component {
       constructor(props){
        super(props);
       
        this.state={
          //interval:null,
          timer:0,
        };
       }

 componentDidMount(){
    this.setState({ interval:setInterval(()=>{
        this.setState({timer:this.state.timer+1});
    },1000),
});
 }
   


 componentWillUnmount(){
    clearInterval(this.state.interval);
 }

 Person={
    fullname:"Aziz Allani",
    profession:"Student",
    imgSrc:bb,
    bio:"Life is Life",
 };





render(){
    return(
        <div className="App">
         <h3>Fullname: {this.Person.fullname}</h3>
         <img src={this.Person.imgSrc} alt="imaaage"></img>
         <h3>Bio: {this.Person.bio}</h3>
         <h3>Profession: {this.Person.profession}</h3>
         <h3>Interval: {this.state.timer}</h3>
        </div>
    );
    
}
}
export default NewComp;
