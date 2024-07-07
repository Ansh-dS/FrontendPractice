import React,{useMemo,useState} from 'react'; 
import SendingData from './SendingData'; 

function test8(){
  let[name,setName]=useState("ansh")
  let[he,setHe]= useState("hii")
  const test= useMemo(
    function test(){
      console.log("called")
    },[he]
    
  )
  return(
    <div>
      {test}
      <SendingData val={name} val1={he}/> 
      <button onClick={()=>setName("aman")}>change above name</button>
      <button onClick={()=>setHe("hello")}>change the he</button>
    </div>
  )
}


export default test8; 