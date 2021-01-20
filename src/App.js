import React, {useState} from "react";
import './FormComponent';
import FormComponent from "./FormComponent";
import FormResults from "./FormResults";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [renderForm, setRenderForm] = useState(false);

  return (
    <div>
      <h1>Hello World</h1>

      <FormComponent firstName = {firstName}  lastName = {lastName} email = {email} password = {password} renderForm = {renderForm} setFirstName = {setFirstName} setLastName = {setLastName} setEmail = {setEmail} setPassword = {setPassword} setRenderForm = {setRenderForm}/>
      <FormResults firstName={firstName} lastName={lastName} email = {email} password={password} renderForm = {renderForm}/>
    </div>
  );
}

export default App;
