import React from 'react'
import './Option.css'
import logo from '../assests/logo.jpg'
import { IoChevronBackOutline } from "react-icons/io5";
import img1 from '../assests/ds.jpg'
import img2 from '../assests/hire.jpg'
import img3 from '../assests/13827.jpg'



function Option() {
    return (
        <>
            <div className='option-page'>

                <div className='top' >
                    <IoChevronBackOutline />
                </div>
                <div className='center-sec'>

                    <div className="head">
                        <h2>What brings you to Dribble?</h2>
                        <p>Select the option that describes you. Don't worry, you can explore others options later</p>
                    </div>
                    <div className="selection">
                        <div className='img-sec'>
                            <img className='photo-opt' src={img1} />
                            <p>I'm designer looking to share my work</p>
                            <input className='select' type='checkbox' />
                        </div>
                        <div className='img-sec2'>
                            <img className='photo-opt' src={img2} />
                            <p>I'm looking to hire a <br />designer</p>
                            <input className='select' type='checkbox' />
                        </div>
                        <div className='img-sec'>
                            <img className='photo-opt' src={img3} />
                            <p>I'm looking for design <br />inspiration</p>
                            <input className='select' type='checkbox' />
                        </div>

                    </div>

                    {/* <div className='bt'>
                        <button>Finish</button>
                    </div> */}

                </div>
                <div className='lt-text'>
                    <h4>Anything else? You can select multiple</h4>
                </div>
                <div className='bt-f'>
                    <button>Finish</button>
                </div>
            </div>
        </>
    )
}

export default Option;