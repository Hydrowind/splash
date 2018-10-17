import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import Pagination from '../../components/Pagination'
import Search from '../../components/Search'
import ArticleCard from '../../components/ArticleCard'
import './style.scss'

const TagLayout = ({data, pathContext}) => {
    const posts = pathContext.slug === 'tags' ? data.allPosts : data.taggedPosts
    return(
        <>
            <Helmet title='SPLASH' meta={[
                { name: 'description', content: 'tags' },
                { name: 'keywords', content: 'splash, hydrowind, software, development, design, ui' },
                ]}
            >
                <html lang="en" />
            </Helmet>
            <Header siteTitle='SPLASH' />
            <div className='TagLayout'>
                <div className='menubar'>
                    <Navigation active='tags'/>
                </div>
                <div className='main'>
                    <div className='tags-container'>
                    {
                        Object.keys(pathContext.allTags).map(t =>
                            <Link key={t} to={`tags/${t}`} className={`tag ${pathContext.slug === t ? 'active' : ''}`}>
                                {t}
                            </Link> 
                        )
                    }
                    </div>
                    {
                        posts.edges.map(p =>
                            <ArticleCard key={p.node.id}
                                coverUrl={p.node.frontmatter.cover.childImageSharp.fluid}
                                title={p.node.frontmatter.title}
                                excerpt={p.node.excerpt}
                                path={p.node.frontmatter.path}
                                author={p.node.frontmatter.author}
                                date={p.node.frontmatter.date}
                                tags={p.node.frontmatter.tags}
                            />
                        )
                    }
                    <Pagination prevPath={pathContext.prevPath} nextPath={pathContext.nextPath}/>
                </div>
                <div className='sidebar'>
                    {/* <Search/> */}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export const postQuery = graphql`
    query BlogPostByTag($slug: String!){
        allPosts: allMarkdownRemark{
            edges{
                node{
                    id
                    excerpt(pruneLength: 480)
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
        }
        taggedPosts: allMarkdownRemark(
            filter: {frontmatter: {tags: {in: [$slug]}}}
        ){
            edges{
                node{
                    id
                    excerpt(pruneLength: 480)
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
        }
    }
`

export default TagLayout