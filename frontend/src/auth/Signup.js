import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./Signup.css"

function Signup({signUp}) {
    const history = useHistory();

    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const signUpAttempt = signUp(formData);
        setFormData(INITIAL_STATE);
        if (signUpAttempt.success) {
            history.pushState("/companies");
        } else {
            setFormErrors(signUpAttempt.errors);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="Signup-Form">
            <label htmlFor='username'>
                Username:
            </label>
            <input
                name='username'
                type='text'
                value={formData.username}
                onChange={handleChange} />
        <br />
            <label htmlFor='password'>
                Password:
            </label>
            <input
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange} />
        <br />
            <label htmlFor='firstName'>
                First Name:
            </label>
            <input
                name='firstName'
                type='text'
                value={formData.firstName}
                onChange={handleChange} />
        <br />
            <label htmlFor='lastName'>
                Last Name:
            </label>
            <input
                name='lastName'
                type='text'
                value={formData.lastName}
                onChange={handleChange} />
        <br />
            <label htmlFor='email'>
                Email:
            </label>
            <input
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange} />
            <br />
            

        <button>Signup</button>
        </form>

    )
}

export default Signup;