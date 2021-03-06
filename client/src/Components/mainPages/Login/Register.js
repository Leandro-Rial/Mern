import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './login.css'

function Register() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        
        try {
            
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={onSubmitForm} className="form-login">
                <h2>Register</h2>

                <input type="text" name="name" placeholder="Name" value={user.name} onChange={onInputChange} required />
                
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={onInputChange} required />
                
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={onInputChange} required />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/signin">
                        Login
                    </Link>
                </div>

            </form>
        </div>
    )
}

export default Register