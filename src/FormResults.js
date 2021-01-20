import React from 'react';

const FormResults = props => {

    const {firstName, lastName, email, password, renderForm} = props;

    return (
        <div>
            <p>First Name: {renderForm == true? firstName:null}</p>
            <p>Last Name: {renderForm == true? lastName:null}</p>
            <p>Email: {renderForm == true? email:null}</p>
            <p>Password: {renderForm == true? password:null}</p>
        </div>
    );
};


export default FormResults;