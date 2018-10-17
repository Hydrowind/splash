import React from 'react'
import NotFoundImage from '../images/404.svg'

const NotFoundPage = () => (
  <div style={{width: '100%', height: '100vh', display: 'flex', flexFlow: 'column nowrap', justifyContent:'center', alignItems: 'center'}}>
    <img style={{width: '25%'}} alt='404 Not Found' src={NotFoundImage}/>
    <h1>404 NOT FOUND</h1>
    <h5>You just hit a link that doesn&#39;t exist... the sadness.</h5>
  </div>
)

export default NotFoundPage
