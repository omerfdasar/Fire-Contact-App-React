import './App.css';
import {useState} from "react";
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"

const initialValues={username:"",phoneNumber:"",gender:"NO INFO"}

function App() {
 const [info,setInfo]=useState(initialValues);

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo}/>
      <Contacts/>
    </div>
  );
}

export default App;