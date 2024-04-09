import React, { useState } from 'react'
import './Signup.css'
import img from '../assests/Db.jpg'
import { useNavigate } from "react-router-dom";

function Signup({ userData, setUserdata }) {
    const navigate = useNavigate();

    const [errors,setErrors]=useState({})
   

    const handleSubmit =(e)=>{
        e.preventDefault()

        const validationErrors = {}

        if(!userData.name.trim()){
            validationErrors.name = "name is required"
        }
        if(!userData.username.trim()){
            validationErrors.username = "username is required"
        }
        if(!userData.email.trim()){
            validationErrors.email = "email is required"
        } else if(!/\S+@\S+\.\S+/.test(userData.email)){
            validationErrors.email = "email is not valid"
        }

        if(!userData.password.trim()){
            validationErrors.password = "password is required"
        } else if(userData.password.length < 6){
            validationErrors.password = "password should be at least 6 characters"
        }

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length===0){
            navigate('/profile')

        }
    }


    return (
        <div className='signup'>
            <div className='image'>
                <img src={img} />
            </div>
            <div className='form-container'>
                <form >
                    <div className='title'>
                        <h1>Sign up to Dribble</h1>
                    </div>

                    <div className='form-field'>
                        <div className='n'>
                            <label>Name</label>
                            <input className='input' type='text' name='name' placeholder='Name' value={userData.name} onChange={(e) =>
                                setUserdata({ ...userData, name: e.target.value })
                            } />
                            <div className='err'>{errors.name && <span>{errors.name}</span>}</div>
                        </div>

                        <div className='n'>
                            <label>Username</label>
                            <input className='input' type='text' name='username' placeholder='Username' value={userData.username} onChange={(e) =>
                                setUserdata({ ...userData, username: e.target.value })
                            } />
                            <div className="err">{errors.username && <span>{errors.username}</span>}</div>
                        </div>

                    </div>

                    <div className="form-field">
                        <div className='m'>
                            <label>Email</label>
                            <input className='input' type='email' name='email' placeholder='Email' value={userData.email} onChange={(e) =>
                                setUserdata({ ...userData, email: e.target.value })
                            } />
                            <div className='err'>{errors.email && <span>{errors.email}</span>}</div>
                        </div>
                    </div>

                    <div className="form-field">
                        <div className='m'>
                            <label>Password</label>
                            <input className='input' type='password' name='password' placeholder='6+ characters' value={userData.paswword} onChange={(e) =>
                                setUserdata({ ...userData, password: e.target.value })
                            } />
                            <div className='err'>{errors.password && <span>{errors.password}</span>}</div>
                        </div>
                    </div>

                    <div className='check'>
                        <div className='box'>
                            <input type='checkbox' />
                        </div>
                        <div className='policy'>
                            <p>Creating an account means you're okay with our <span className='sg'>Terms of Services, Privacy Policy</span> and <span className='sg'>default Notification Settings.</span></p>
                        </div>
                    </div>

                    <div>
                        <button type="submit" onClick={handleSubmit}>Create Account</button>
                    </div>
                    <div className='cap'>
                        <p>This site is protected by reCAPTCHA and the Google
                            <br /><span className='sg'>Privacy Policy</span> and
                            <span className='sg'> Terms of Service</span> apply.</p>
                    </div>

                </form>
                <div className='login_t'>
                    <p>Already a member?<span className='sg'>Sign In</span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup