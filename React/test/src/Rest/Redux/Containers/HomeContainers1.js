import Home1 from '../Components/Home1'
import  {addToCart, removeFromCart} from '../Services/Actions/action'
import {connect} from 'react-redux'; 

let dataFromStore=(currentState)=>({         // reducer and container file are interlinked soo we can use the "objects" of that file to this without any import.  

        insideValues: currentState        })

const sendingDataActionToReducer= (dispatch)=>({
  
        addToCartHandler: (values) => {dispatch(addToCart(values))},         //name: function
        removeFromCartHandler: ()=> {dispatch(removeFromCart())}
})


export default connect( dataFromStore ,sendingDataActionToReducer)(Home1)