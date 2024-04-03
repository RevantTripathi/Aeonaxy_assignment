import React from 'react'
import './Signup.css'
import img from '../assests/Db.jpg'

function Signup() {
    return (
        <div className='signup'>
            <div className='image'>
                <img src={img} />
            </div>

            <div className='form-container'>


                <form>
                    <div className='title'>

                        <h1>Sign up to Dribble</h1>
                    </div>
                    <div className='form-field'>
                        <div className='n'>
                            <label>Name</label>
                            <input type='text' name='name' placeholder='Name'></input>
                        </div>
                        <div className='n'>
                            <label>Username</label>
                            <input type='text' name='username' placeholder='Username'></input>
                        </div>

                    </div>

                    <div className="form-field">
                        <div className='m'>
                            <label>Email</label>
                            <input type='email' name='username' placeholder='Username' />
                        </div>
                    </div>

                    <div className="form-field">
                        <div className='m'>
                            <label>Password</label>
                            <input type='password' name='password' placeholder='6+ characters' />
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
                        <button>Create Account</button>
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