import React from 'react'
import { Link } from 'gatsby'
import MaterialIcons from '../MaterialIcons'
import './style.scss'

const Pagination = ({prevPath, nextPath}) => (
    <div className='Pagination'>
        {prevPath ? <Link className='left' to={prevPath}><h4><MaterialIcons icon='chevron_left' size='2'/>older post</h4></Link> : ''}
        {nextPath ? <Link className='right' to={nextPath}><h4>later post<MaterialIcons icon='chevron_right' size='2'/></h4></Link> : ''}
    </div>
)

export default Pagination