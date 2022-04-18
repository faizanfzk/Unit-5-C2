import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState} from "react";
import"./App.css"

function App() {
  const [status,setStatus]=useState(true);
  function statusHandle(){
    setStatus(!status)
  };
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>statusHandle()}>{status ? "Add a New Student":"Go to student List"}</button>
      
      {/* {status ? <ShowStudents/>: <ShowStudents/> } */}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      {status ? <ShowStudents/>:<AddStudent/>}
    </div>
  );
}

export default App;