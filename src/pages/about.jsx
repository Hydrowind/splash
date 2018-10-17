import React from 'react'
import ProfileImage from '../images/profile.svg'

const AboutPage = () => (
  <div style={{width: '100%', height: '100vh', display: 'flex', flexFlow: 'column nowrap', justifyContent:'center', alignItems: 'center'}}>
    <img style={{width: '25%'}} alt='profile' src={ProfileImage}/>
    <h1>Hello I'm Herdhiantoko Fathani</h1>
    <h4>just a silly human who want to create an imaginary world.</h4>
  </div>
)

export default AboutPage
