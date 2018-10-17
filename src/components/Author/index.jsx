import React from 'react'
import profile from '../../images/profile.svg'
import './style.scss'

const Author = ({name, photoUrl, caption, socialLinks}) => (
    <div className='Author'>
        <h4>Author</h4>
        <div className='profile'>
            <img className='gutter-bottom' src={photoUrl || profile} alt='profile'/>
            <h4 className='name'>{name || 'this post was created by itself'}</h4>
            <h5>{caption || `tuliskan saja apa yang ada dalam pikiran. sampaikan saran, buat, lalu publikasi.`}</h5>
            <ul>
                {/* {socialLinks.map((s) => <li>{s.name}</li>)} */}
            </ul>
        </div>
    </div>
)

export default Author