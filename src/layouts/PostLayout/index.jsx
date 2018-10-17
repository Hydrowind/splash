import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Footer from '../../components/Footer'
import PostCard from '../../components/PostCard'
import Author from '../../components/Author'
import Widget from '../../components/Widget'
import Search from '../../components/Search'
import './style.scss'

const PostLayout = ({data}) => (
    <>
        <Helmet title={data.markdownRemark.frontmatter.title} meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            ]}
        >
            <html lang="en" />
        </Helmet>
        <div className='PostLayout'>
            <div className='main'>
                <PostCard title={data.markdownRemark.frontmatter.title} content={data.markdownRemark.html} coverUrl={data.markdownRemark.frontmatter.cover.childImageSharp.fluid}/>
            </div>
            <div className='sidebar'>
                {/* <Search/> */}
                <Author name='Herdhiantoko Fathani' />
                <Widget title="Archives" content={data.markdownRemark.frontmatter.date || 'unarchived'}/>
                <Widget title="Tags" content={data.markdownRemark.frontmatter.tags || 'untagged'}/>
            </div>
        </div>
        <Footer/>
    </>
)

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: {eq: $path} }){
            html
            frontmatter{
                path
                author
                date
                title
                tags
                cover{
                    publicURL
                    childImageSharp{
                        fluid(maxWidth: 1080, maxHeight: 720) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            } 
        }
    }
`

// PostLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default PostLayout
