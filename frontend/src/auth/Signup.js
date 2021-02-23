import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./Signup.css"
import Alert from "../helpers/Alert";

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        const signUpAttempt = await signUp(formData);
        setFormData(INITIAL_STATE);
        if (signUpAttempt.success) {
            history.push("/companies");
        } else {
            setFormErrors(signUpAttempt.errors);
        }
    }

    return (
        <div className="Signup-container container p-4">
            <h1 className="Signup-Title">Signup</h1>
        <form onSubmit={handleSubmit} className="Signup-Form">
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
                <div className="form-group">
                    <label htmlFor='firstName'>
                        First Name:
                    </label>
                    <input
                        name='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor='lastName'>
                        Last Name:
                    </label>
                    <input
                        name='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>
                        Email:
                    </label>
                    <input
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control" />
                </div>

                {formErrors.length > 0
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button className="btn btn-info">Signup</button>

        </form>
        </div>

    )
}

export default Signup;