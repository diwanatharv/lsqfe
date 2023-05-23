import React,{Component} from "react";
// it extends component 
//use render method
class Welcome extends Component{
    constructor(){
        super()
        this.state={
            message :"welcome to lsq"
         }
    }
changemessage(){
    this.setState({
        message:"thankyou for suscribing"
    })
}
render(){
    return <div><h1>Class component{this.props.name}</h1>
    <h1>{this.state.message}</h1>
    <button onClick={()=>this.state.changemessage}>Suscribe </button>
    </div>
}
}
export default Welcome
