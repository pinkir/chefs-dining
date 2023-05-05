import React from 'react';
import './Footer.css'
import footer from '../../assets/carosal2.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='d-flex gap-4 justify-content-around mt-5 p-5 text-light bg-dark footer'>
            <div className=''>
                <h3>About us</h3>
                <p className=''>We are passionate about sharing the flavors,<br /> culture, and history of the Mediterranean  region with the world. </p>
            </div>
            <div>
                <h3>Follow us</h3>
                <div className='d-flex justify-content-between'>
                <p><FaFacebook></FaFacebook></p>
                <p><FaTwitter></FaTwitter></p>
                <p><FaInstagram></FaInstagram></p>
                <p><FaLinkedin></FaLinkedin></p>
                </div>
            </div>
            <div>
                <h3>Newsletter</h3>
                <input type="email" name="email" id="" placeholder='Email'/>
            </div>
        </div>
    );
};

export default Footer;