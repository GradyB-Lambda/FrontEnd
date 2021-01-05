import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'




const initialFormValue = {
    username: "",
    password: "",
    email: ""
}

const Login = () => {

    const { push } = useHistory()

    useEffect(() => {
        axios.get('https://foodtruck-backend-api.herokuapp.com/api')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    const [formValue, setFormValue] = useState(initialFormValue)

    const changeHandler = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('https://foodtruck-backend-api.herokuapp.com/api', formValue)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            console.log(res)
            push('/ClassList')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <div className='rowC'>
            <Navbar />
            </div>
            <div className='formWrap'>
    

                <form onSubmit={submitHandler}>
                <div className='lable-top'></div>
                    <input 
                        type="text"
                        name="username"
                        value={formValue.username}
                        placeholder="username"
                        onChange={changeHandler}
                    />

                    <input 
                        type="text"
                        name="email"
                        value={formValue.email}
                        placeholder="email address"
                        onChange={changeHandler}
                    />

                    <input 
                        type="password"
                        name="password"
                        value={formValue.password}
                        placeholder="password"
                        onChange={changeHandler}
                    />
                    <button type="submit">Login</button>
                </form>

            </div>
        </div>
       
    )
}

export default Login;