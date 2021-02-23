import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css"
import Alert from "../helpers/Alert";

function LoginForm({loginUser}) {
    let history = useHistory();

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

    const handleSubmit = async(e) => {
        e.preventDefault();

        const loginAttempt = await loginUser(formData);
        setFormData(INITIAL_STATE);
        if (loginAttempt.success) {
            history.push("/companies");
        } else {
            setFormErrors(loginAttempt.errors);
        }
    }

    return (

        <div className="LoginForm-container container p-4">
            <h1 className="LoginForm-title">Login</h1>
            <form onSubmit={handleSubmit} className="LoginForm">
                <div className="form-group">
                    <label htmlFor='username'>
                        Username:
                    </label>

                    <input
                        name='username'
                        type='text'
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control" />
            
                </div>
                <div className="form-group">
                    <label htmlFor='password'>
                        Password:
                    </label>
                    <input
                        name='password'
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control" />    
                </div>

                {/* {formErrors.length > 0
                    ? <Alert type="danger" messages={formErrors} />
                    : null} */}

                <button className="btn btn-info">Login</button>
            </form>
        </div>

    )
}

export default LoginForm;