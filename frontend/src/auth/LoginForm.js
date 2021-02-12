import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({loginUser}) {
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
        const loginAttempt = loginUser(formData);
        setFormData(INITIAL_STATE);
        if (loginAttempt.success) {
            history.pushState("/companies");
        } else {
            setFormErrors(loginAttempt.errors);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>
                Username:
            </label>
            <input
                name='username'
                type='text'
                value={formData.username}
                onChange={handleChange} />

            <label htmlFor='password'>
                Password:
            </label>
            <input
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange} />

        <button>Login</button>
        </form>

    )
}

export default LoginForm;