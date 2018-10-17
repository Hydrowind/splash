import React from 'react'
import { Link } from 'gatsby'
import MaterialIcons from '../MaterialIcons'
import './style.scss'

const Navigation = ({active}) => (
    <div className='Navigation'>
        <Link to='/' className={`nav-item ${active === 'home' ? 'active' : ''}`}>
            <h5>home</h5>
            <MaterialIcons icon='home' size='2'/>
        </Link>
        <Link to='/tags' className={`nav-item ${active === 'tags' ? 'active' : ''}`}>
            <h5>tags</h5>
            <MaterialIcons icon='bookmark' size='2'/>
        </Link>
        <Link to='/about' className={`nav-item ${active === 'about' ? 'active' : ''}`}>
            <h5>about</h5>
            <MaterialIcons icon='info' size='2'/>
        </Link>
        {/* <Link to='/rss' className='nav-item'>
            <h5>rss</h5>
            <MaterialIcons icon='rss_feed' size='2'/>
        </Link> */}
    </div>
)

export default Navigation