import React from 'react'
import './style.scss'

const PostCard = ({author, date, content}) => {
    
    return(
        <div className='PostCard'>
            {/* <h3>{author || `Who creates me?`}</h3>
            <h4 className='gutterBottom'>{date || `sometime on 3020`}</h4> */}
            <div className='markdown-body' dangerouslySetInnerHTML={{__html: content || `do i have any contents?`}}/>
        </div>
    )
}

export default PostCard
