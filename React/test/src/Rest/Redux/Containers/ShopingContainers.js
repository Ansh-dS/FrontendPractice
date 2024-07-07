import {connect} from 'react-redux'; 
import Shoping from '../Components/Shoping';

let dataFromStore=(currentState)=>({         // reducer and container file are interlinked soo we can use the "objects" of that file to this without any import.  
        insideValues: currentState  })

const sendingDataActionToReducer= (dispatch)=>({})

export default connect( dataFromStore ,sendingDataActionToReducer)(Shoping)