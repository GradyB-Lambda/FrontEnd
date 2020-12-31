import React, {useState, useEffect } from 'react'

const initialFormValues = {
username: "", 
password: "", 
email: "", 
terms: false
}

// Need initialFormErrors to handle errors? 

export default function SignUp (){

    const [users, setUsers] = useState([]); 
    const [formValues, setFormValues] = useState(initialFormValues); 

    const updateForm = (inputName, inputValue) => {
        setFormValues({
            ...formValues,
            [inputName]: inputValue,
        });
    };

    const registerUser = () => {
        const newUser = {
            username: formValues.username.trim(), 
            password: formValues.password.trim(), 
            email: formValues.email.trim(),
        };

        if (!newUser.username || !newUser.email || !newUser.email)
        return; 

        axios
        // .post("", newUser)  --- What is the API that I should link to here? 
        .then( res => {
            setUsers([newUser, ... users]); 
            setFormValues(initialFormValues);
        })
        .catch(err => {
            console.log('you have an error somewhere- check it out!')
        });
    };
    
    useEffect( () => {
        // axios.get('--what is the api i should use?').then(res => setUsers(--what is the data called?--));
    }, []);

    return (
        null
        // What should this page look like? 
    )

}