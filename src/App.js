
import "./App.css";
import React from "react";
import NewComp from "./component/NewComp";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: false}
   
   }


   toogleDiv=()=>{
    this.setState({show: !this.state.show})
   }



 render() {

  return(
    <>
    <button onClick={this.toogleDiv}>Toggle div</button>
         <br/>
         {this.state.show && <NewComp/>}
   
        
  
    
    </>
  )
}
}
export default App;









