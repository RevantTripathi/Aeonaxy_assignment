import React, { useState } from 'react'
import './Profile.css'
import logo from '../assests/logo.jpg'
import pic from '../assests/picture.jpg'

import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Profile({ userData, setUserdata }) {

    const [image, setImage] = useState('');

    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        setImage(event.target.files[0])
    }



    const handleChange = async () => {




        await axios.post("http://localhost:5000/users", { ...userData }).then(
            (res) => {
                console.log(res);
                navigate('/option')

                const data = new FormData()
                data.append("file", image)
                data.append("upload_preset", "revantapp")
                data.append("cloud_name", "revantcloud")
                fetch("https://api.cloudinary.com/v1_1/revantcloud/image/upload",
                    {
                        method: "post",
                        body: data
                    })
                    .then((res) => res.json())
                    .then((data) => { console.log(data) })
                    .catch((err) => { console.log(err) })



            }
        ).catch(
            (err) => {
                console.log("Error in sending data", err)
            }
        )
        setUserdata({
            name: "",
            username: "",
            email: "",
            password: "",
            city: "",
        })
    }


    return (
        <>
            <div className='profile'>
                <div className='logo-d'>
                    <img src={logo}></img>
                </div>
                <div className='top' >
                    <IoChevronBackOutline onClick={() => { navigate('/profile') }} />
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
                            {/* <img className='avt' src={pic} alt=''></img> */}
                            {image ? <img className='avt' src={URL.createObjectURL(image)} /> :
                                <img className='avt' src={pic}></img>
                            }
                        </div>
                        <div className='bt'>
                            <div className='upload-bt'>
                                <input type='file' onChange={handleImageChange} />
                            </div>
                        </div>

                    </div>
                    <div className='location-sec'>

                        <h3>Add your location</h3>
                        <input type='text' placeholder='Enter a location' value={userData.city} onChange={(e) => setUserdata({ ...userData, city: e.target.value })} />


                    </div>
                    <div className='nt-bt'>
                        <button onClick={handleChange}>Next</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile