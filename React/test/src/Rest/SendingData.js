import React,{Component} from 'react'; 

class SendingData extends Component{
  constructor(props){
    super(props); 
    
    }
  

  render(){
    
    return(
      <div>
        <h1>{this.props.val}</h1>
        <h1>{this.props.val1}</h1>
      </div>
    )
  }
}

export default SendingData; 