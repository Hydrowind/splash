import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import Pagination from '../../components/Pagination'
import Search from '../../components/Search'
import GreetCard from '../../components/GreetCard'
import ArticleCard from '../../components/ArticleCard'
import './style.scss'

const HomeLayout = ({data, pathContext}) => (
    <>
        <Helmet title={data.site.siteMetadata.title} meta={[
            { name: 'description', content: 'splash, hydrowind, software, development, design, ui' },
            { name: 'keywords', content: 'splash, hydrowind, software, development, design, ui' },
            ]}
        >
            <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='HomeLayout'>
            <div className='menubar'>
                <Navigation active='home'/>
            </div>
            {console.log(data)}
            <div className='main'>
                <GreetCard/>
                {data.allMarkdownRemark.edges.map(p =>
                    <ArticleCard key={p.node.id}
                        coverUrl={p.node.frontmatter.cover.childImageSharp.fluid}
                        title={p.node.frontmatter.title}
                        excerpt={p.node.excerpt}
                        path={p.node.frontmatter.path}
                        author={p.node.frontmatter.author}
                        date={p.node.frontmatter.date}
                        tags={p.node.frontmatter.tags}
                    />
                )}
                <Pagination prevPath={pathContext.prevPath} nextPath={pathContext.nextPath}/>
            </div>
            <div className='sidebar'>
                {/* <Search/> */}
            </div>
        </div>
        <Footer/>
    </>
)

export const IndexQuery = graphql`
    query IndexQuery($skip: Int!, $limit: Int!) {
        site{
            siteMetadata{
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            skip: $skip
            limit: $limit
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

export default HomeLayout