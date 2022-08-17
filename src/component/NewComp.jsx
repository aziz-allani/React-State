import React, {Component} from "react"
import aa from "./aa.jpg"
import bb from "./bb.jpg"
class NewComp extends Component {
       constructor(props){
        super(props);
       
        this.state={
           
            fullname: "fullname...",
   bio:"bio...",
   imgURL:aa,
   profession:"Profession...",
   bouton:"See More!",
        };
       }



styles={fontStyle:"italic" , color:"purple"};

ButtonChange=()=> {this.setState({
    message:"Profile Card",
    fullname: "Aziz Allani",
bio:"life is life",
imgSrc:"",
profession:"Student",
bouton:"Profile ",
});
};

imageChange=()=>{this.setState({
    imageURL: bb,
})}

render(){
    return(
        <div className="App">
            <h3 style={this.styles}>{this.state.fullname} {this.state.bio} {this.state.profession}</h3>
            <button onClick={this.ButtonChange}> {this.state.bouton}</button>
            <p/>
            <img style={{width:"30px" , height:"30px"}} 
            src={this.imageChange} 
            alt="imaaaaaaage"
            />
        </div>
    );
    
}
}
export default NewComp;
