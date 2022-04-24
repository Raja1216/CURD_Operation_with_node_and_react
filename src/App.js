
import './App.css';
import {useState} from"react";
import Axios from 'axios';


function App() {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [age,setAge] = useState(0);
  const [country,setCountry] = useState('');
  const [position,setPosition] = useState('');

// const display = ()=> {
//   console.log(fname + lname + age + country +position);
// }

// Create A state for get all data
const [employList,setEpployeeList] =useState([]);


//Make Axios Request
const addEmployee = ()=>{
  //Call create route
Axios.post('http://localhost:3001/create', {fname:fname, 
lname:lname, 
age:age, 
country:country,
position:position
}).then(() => {
  console.log("Success");
});
};

const getEmployee = ()=>{
  //Call create route
Axios.get('http://localhost:3001/getEmp').then((responce) => {
  console.log(responce);
  setEpployeeList(responce.data);
});
};

  return (
    <div className="App">
    <div className='fromDiv'>
     <form>
  <label  className="fromLable">First name:</label><br/>
  <input type="text" id="fname" name="fname" onChange={(event)=> {setFname(event.target.value);}}/><br/>
  <label  className="fromLable">Last name:</label><br/>
  <input type="text" id="lname" name="lname" onChange={(event)=> {setLname(event.target.value);}}/><br/>
  <label className="fromLable">Age:</label><br/>
  <input type="number" id="age" name="age" onChange={(event)=> {setAge(event.target.value);}}/><br/>
  <label  className="fromLable">Country:</label><br/>
  <input type="text" id="country" name="country" onChange={(event)=> {setCountry(event.target.value);}}/><br/>
  <label  className="fromLable">Position:</label><br/>
  <input type="text" id="position" name="position" onChange={(event)=> {setPosition(event.target.value);}}/><br/>
  <div className="btn Container">
  <button className="cnlBtn" type="button">Cancel</button>
  <button className="addBtn" type="submit" onClick={addEmployee}>Add</button>
  </div>
</form>
    </div>
    ===================================================================================
    <div>
   
  <button onClick={getEmployee}> Show All Details</button>

    {employList.map((val,key)=>{
      return <div>{val.FirstName}</div>
    })}
    </div>

    </div>
  );
}

export default App;
