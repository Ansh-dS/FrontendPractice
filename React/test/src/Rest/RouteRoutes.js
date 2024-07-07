import Form from './Form'; 
import Hello from './Hello'; 
import Links from '../Links'; 

import {Navigate} from 'react-router-dom';

import { BrowserRouter,Route,Routes} from 'react-router-dom';

function test9(){
 
 return( 
  
  <BrowserRouter>                         {/*if we are using react-router-dom we must write all the components into BrowserRoute */}
    
    <Routes>  
      <Route path='/' element= {<Links />}></Route>
      <Route path='/form' element= {<Form/>} ></Route>
      <Route path='/users/:name' element={<Hello />}></Route>
      
      <Route path='/*' element={<Navigate to='/'/>} ></Route> {/* Navigate is a componet whereas useNavigate to used to move from one page to other*/}
    </Routes>
  </BrowserRouter>
 )
}

export default test9; 