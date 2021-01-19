import React, {useState } from 'react';

const FormComponent = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault()
        const newUser = {firstName, lastName, email, password};
        console.log(`user ${newUser.firstName}, created!`);
        setFirstName("");
        setLastName("");
        setPassword("");
        setEmail("");
    }

    return (
        <div>
            <form onSubmit = {createUser}>
                <div className = "firstName">
                    <label>First Name</label>
                    <input type = "text" onChange = {(e) => setFirstName(e.target.value)}  value = {firstName} />
                </div>

                <div className = "lastName">
                    <label>Last Name</label>
                    <input type = "text" onChange = {(e) => setLastName(e.target.value)} value = {lastName} ></input>
                </div>

                <div className = "email">
                    <label>Email</label>
                    <input type = "text" onChange = {(e) => setEmail(e.target.value)} value = {email} ></input>
                </div>

                <div className = "password">
                    <label>Password</label>
                    <input type = "text" onChange = {(e) => setPassword(e.target.value)} value = {password} ></input>
                </div>

                <div className = "submitButton">
                    <input type = "submit" value = "Create User" />
                </div>

            </form>


        </div>
    );
};

export default FormComponent;

