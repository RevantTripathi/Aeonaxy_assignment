import React from 'react'
import './Profile.css'
import logo from '../assests/logo.jpg'
function Profile() {
    return (
        <>
            <div className='profile'>
                <div className='logo-d'>
                    <img src={logo}></img>
                </div>
                <div className='form-section'>
                    <div className='welcome-text'>
                        <h1>Welcome! Let's create your profile</h1>
                       <span className='gg'> <p>Let others get to know you better! You can do these later</p></span>
                    </div>
                    <div className='avt-text'>
                        <h3>Add an avatar</h3>
                    </div>
                    <div className='picture-sec'>
                        <div>
                            <img className='avt' src='' alt=''></img>
                        </div>
                        <div className='bt'>
                            <div className='upload-bt'>
                                <input type='file' />
                            </div>
                        </div>

                    </div>
                    <div className='location-sec'>

                        <h3>Add your location</h3>
                        <input type='text' placeholder='Enter a location' />


                    </div>
                    <div className='nt-bt'>
                        <button>Next</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile