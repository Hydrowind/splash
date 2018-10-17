import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import MaterialIcons from '../MaterialIcons'
import Cover from '../../images/no_image.svg'
import './style.scss'

const ArticleCard = ({title, coverUrl, author, date, excerpt, path, tags}) => (
    <div className='ArticleCard'>
        <div className='head'>
            {coverUrl ? <Img className='cover' fluid={coverUrl}/> : <img className='cover' style={{padding: '2rem'}}alt='cover' src={Cover}/>}
        </div>
        <div className='body'>
            <h3>{title || 'Give me a Title!'}</h3>
            <div className='tags gutter-bottom'>
                {
                    tags.map(t =>
                        <Link key={t} to={`tags/${t}`} className='tag'>
                            {t}
                        </Link> 
                    )
                }
            </div>
            <h4><MaterialIcons icon='person' size='2'/> &nbsp; {author || 'Who creates me?'}</h4>
            <h4 className='gutter-bottom'><MaterialIcons icon='event_note' size='2'/> &nbsp; {date || 'sometime in 3022'}</h4>


            <h6 className='gutter-bottom'>{excerpt || lipsum}</h6>
            <Link to={path || '#'} className='btn'>read more</Link>
        </div>
    </div>
)

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus porta tortor. Maecenas in quam tortor. Nam dignissim tincidunt enim, at tincidunt nisl volutpat at. Integer mattis augue lorem, nec placerat magna lacinia vel. Fusce quis ligula sit amet lectus condimentum congue eu a odio. Donec blandit, risus id rhoncus imperdiet, nunc odio dignissim turpis, sit amet eleifend dui orci vel ligula. Praesent efficitur orci quis nulla suscipit, nec egestas quam maximus.'

export default ArticleCard