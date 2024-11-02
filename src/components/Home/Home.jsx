import React from 'react'
import "./Home.css"
import home from "../../assets/home.jpg"
const Home = () => {
  return (
    <div className="home-container">
        <div className="home-content-container">
            <div className="home-content-heading">
            Service Details
            </div>
            <div className="home-content-text">
            At <span>More Daliya & Associates</span>, we offer expert corporate and financial advisory services, ensuring your business stays compliant while driving growth. With a focus on corporate governance and capital markets, we help businesses thrive with confidence.
            </div>
            <div className="home-content-button">
                <button>Get Started</button>
            </div>
        </div>
        <div className="home-img">
            <img src={home} alt="" />
        </div>
    </div>
  )
}

export default Home