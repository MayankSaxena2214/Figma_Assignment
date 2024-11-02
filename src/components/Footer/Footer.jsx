import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.jpg";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-upper">
            <div className="footer-upper-left">
                <img src={logo} alt="" />
                <p className='address'>712, Lokmat Bhawan,A WING, <br /> Ramdaspeth, Nagpur, Maharashtra <br /> 440010</p>
                <div className="socials">
                    <FaInstagram className='insta'/>
                    <FaYoutube className='youtube'/>
                    <FaLinkedin className='linkedin'/>
                    <FaTwitter className='twitter'/>
                </div>

            </div>
            <div className="footer-upper-right">
                <div className="upper-right-services">
                    <div className="heading">Services</div>
                    <p>Companies Act</p>
                    <p>Securities Law</p>
                    <p>Financial Services</p>
                    <p>Investment Banking</p>
                    <p>Risk Management</p>
                    <p>Audit</p>
                </div>
                <div className="upper-right-resources">
                    <div className="heading">Resources</div>
                    <p>About us</p>
                    <p>Blogs</p>
                    <p>Contact Us</p>
                </div>
                <div className="upper-right-contact">
                    <div className="heading">Contact Information</div>
                    <p>+91 299366311</p>
                    <p>+91 299366311</p>
                    <p className='gmail'>infor@moredaliya.com</p>
                    <button>Get in Touch with us</button>
                </div>
            </div>
        </div>
        <div className="footer-lower">
            <div className="lower-left">© More Daliya Inc. All rights reserved.</div>
            <div className="lower-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer