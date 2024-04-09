import React, { useState } from 'react'
import './Option.css'
import logo from '../assests/logo.jpg'
import { IoChevronBackOutline } from "react-icons/io5";
import img1 from '../assests/ds.jpg'
import img2 from '../assests/hire.jpg'
import img3 from '../assests/13827.jpg'
import { useNavigate } from "react-router-dom";
// import { useState } from 'react'



function Option() {
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className='option-page'>

                <div className='top' >
                    <IoChevronBackOutline onClick={()=>{navigate('/profile')}}/>
                </div>
                <div className='center-sec'>

                    <div className="head">
                        <h2>What brings you to Dribble?</h2>
                        <p>Select the option that describes you. Don't worry, you can explore others options later</p>
                    </div>
                    <div className='selection' >
                        <div className='img-sec'>
                            <img className='photo-opt' src={img1} />
                            <h4>I'm designer looking to share my work</h4>
                            <input type='checkbox' className='select' />

                        </div>
                        <div className='img-sec2'>
                            <img className='photo-opt' src={img2} />
                            <h4>I'm looking to hire a <br />designer</h4>
                            <input className='select' type='checkbox' />
                        </div>
                        <div className='img-sec'>
                            <img className='photo-opt' src={img3} />
                            <h4>I'm looking for design <br />inspiration</h4>
                            <input className='select' type='checkbox' />
                        </div>

                    </div>

                </div>
                <div className='lt-text'>
                    <h4>Anything else? You can select multiple</h4>
                </div>
                <div className='bt-f'>
                    <button onClick={()=>{navigate('/email')}}>Finish</button>
                </div>
            </div >
        </>
    )
}

export default Option;