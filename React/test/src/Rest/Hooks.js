import React, {Component} from 'react'; 
import App from '../App'; 

class Hooks extends Component{

    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        alert("Your component has removed")
    }

    render(){
        console.log("render")
        return(
            <h1>name {this.props.name} from {this.props.school}</h1>
        ) 
    }
  
}

export default Hooks; 