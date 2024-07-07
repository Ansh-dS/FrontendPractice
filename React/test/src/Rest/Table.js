import React,{Component} from 'react'; 
import {Table} from 'react-bootstrap';

class App extends Component{

  constructor(){
    super();
    this.arr= [{name:"ansh",email:"passOut"},{name:"aman",class:"passOut"}]
    this.adress=[{houseNo:32, place:"Noida", location:"India"},{houseNo:7, place:"sudershanPark", location:"India"}]
  }
   
  render(){
    
    return(
      <div>
        <Table variant="dark" striped>
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Adress</th>
            </tr>
          </thead>

          <tbody>
          {
           this.arr.map((row,i)=>
            <tr key={i}>
              <td>{row.name}</td>
              <td>{row.place}</td>
              <td>
                <Table variant="dark" stri>
                  <thead>
                    <tr>
                      <th>HouseNo</th>
                      <th>Place</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        this.adress.map((adress1,j)=>
                        <tr key={j}>
                          <td>{adress1.houseNo}</td>
                          <td>{adress1.place}</td>
                          <td>{adress1.location}</td>
                        </tr>
                        )
                      }
                  </tbody>
                </Table>
              </td>
            </tr>
          )
          }
          </tbody>


        </Table>
        
      </div>
    )
  }

}
export default App; 