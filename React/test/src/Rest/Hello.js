import { useParams,useSearchParams } from "react-router-dom";

function Hello(){
     let [x , setX]= useSearchParams()
    let {name}= useParams()
    return(
        <div>
            
            <h1 style={{color:"white"}}>Hello {name} </h1>
            <h1 style={{color:"white"}}>Your age is {x.get('age')}  </h1>
        </div>
    )
}

export default Hello; 