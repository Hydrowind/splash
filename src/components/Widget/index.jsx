import React from 'react'
import './style.scss'

const Widget = ({title, content}) => (
    <div className='Widget'>
        <h4>{title || 'Widget'}</h4>
        {
            content.constructor === Array ? content.map(c => <h5>{c}</h5>) : <h5>{content || 'nothing here'}</h5>
        }
    </div>
)

export default Widget