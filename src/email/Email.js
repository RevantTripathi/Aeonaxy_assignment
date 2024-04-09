import React from 'react'
import './Email.css'

import mail from '../assests/mail.png'



function Email({ userData}) {

    // setUserdata({
    //         name: "",
    //         username: "",
    //         email: "",
    //         password: "",
    //         city: "",
    //     })

    
    console.log("Old ->",userData);

    return (
        <>
            <div className='email-text'>
                <h1>Please Verify your email</h1>
                <img className='mail-logo' src={mail} />
                <p>Please verify your email address. We've sent a confirmation email to</p>
                <h4>
                    {userData.email}
                </h4>
                <p>Click the confirmation link in that email to begin using Dribble.</p>
                <p>Didn't recieve the email? Check your spam folder, it may have been caught by a filter.</p>
                <p>It you still don't see it, you can <span className='pp'>resend the confirmation mail</span> </p>
                <p>Wrong email address? <span className='pp'>Change it.</span></p>

            </div>
        </>
    )
}

export default Email;