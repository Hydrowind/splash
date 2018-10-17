import React from 'react'
import './style.scss'

const GreetCard = () => (
    <div className='GreetCard'>
        <div className='head'>
            <h3>BERIKAN IMAJINASIMU</h3>
            <h4>tempat berimajinasi - tempat berkreasi - tempat berbagi</h4>
        </div>
        <div className='body'>
            <blockquote>
                <h6>jangan bermain dengan perasaan karena kau mungkin memenangkan permainannya tetapi kau juga mungkin akan kehilangan lawan mainmu untuk selamanya.</h6>
                <h6 className='author'>- Shakespeare</h6>
            </blockquote>
        </div>
    </div>
)

export default GreetCard