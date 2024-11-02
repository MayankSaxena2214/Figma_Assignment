import React from 'react'
import Home from '../Home/Home'
import SecretoryServices from '../SecretoryServices/SecretoryServices'
import AdvisoryServices from '../AdvisoryServices/AdvisoryServices'
import ExpertCall from '../ExpertCall/ExpertCall'
import Footer from '../Footer/Footer'
import { Fade, Slide } from 'react-awesome-reveal'
const Layout = () => {
  return (
    <div>
      <Fade>
      <Home/>
      </Fade>
      
      <SecretoryServices/>
      
      <AdvisoryServices/>
      <ExpertCall/>
      <Footer/>
    </div>
  )
}

export default Layout