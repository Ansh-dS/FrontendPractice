let object= {array:[]}

export default function items(currentState=object , action){   // Pass object over here. 
 
    switch(action.type){                                 // curley braces are used to create objects.     
        case "addToCart":       
        
            return{        
                array: [...currentState.array, action.values]            // extending new values into list.  
                
            }
            //we can call actions without importing
      
        case "removeFromCart": 
        
            return{
                array: [...currentState.array.slice(0,-1)] 
            }
  
        default: 
            return currentState;    
    }
}




 