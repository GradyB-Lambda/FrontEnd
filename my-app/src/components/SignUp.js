import React, {useState, useEffect } from 'react'

const initialFormValues = {
username: "", 
password: "", 
email: "", 
terms: false
}

// Need initialFormErrors to handle errors? 

export default function SignUp (){

    const [trucks, setTrucks] = useState([]); 
    const [formValues, setFormValues] = useState(initialFormValues); 

    const registerUser = (inputName, inputValue) => {
        return null; 
    }

    return (
        null
    )
}