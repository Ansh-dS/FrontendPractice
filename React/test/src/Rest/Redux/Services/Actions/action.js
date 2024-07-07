export function addToCart(data){
    return{                                        
        values:data,
        type:"addToCart"
    }
    
}

export function removeFromCart(){
    console.log("action")
    return{
        type:"removeFromCart"
    }
}

