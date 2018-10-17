/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve(`src/layouts/PostLayout/index.jsx`)
        const indexTemplate = path.resolve(`src/layouts/HomeLayout/index.jsx`)
        // Query for markdown nodes to use in creating pages.
        resolve(
            graphql(
            `
                {
                allMarkdownRemark(limit: 1000) {
                    edges {
                        node {
                            frontmatter {
                                path
                                tags
                            }
                        }
                    }
                }
                }
            `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                // Create blog-list pages
                const posts = result.data.allMarkdownRemark.edges
                const postsPerPage = 5
                const numPages = Math.ceil(posts.length / postsPerPage)

                const paginationPath = (prefix, index, totalPages) => {
                    if(index === 0){
                        return ``
                    } else if(index < 0 || index >= totalPages){
                        return null
                    } else {
                        return `${prefix}/${index+1}`
                    }
                }

                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path: i === 0 ? `/` : `/page/${i + 1}`,
                        component: indexTemplate,
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            prevPath: paginationPath('/page', i + 1, numPages),
                            nextPath: paginationPath('/page', i - 1, numPages),
                        },
                    })
                })
        
                // Create pages for each markdown file.
                posts.forEach(({ node }) => {
                    const path = node.frontmatter.path
                    createPage({
                        path,
                        component: blogPostTemplate,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            path,
                        },
                    })
                })


                // Create tag pages
                const allTags = {};

                posts.forEach(({ node }) => {
                    const { tags } = node.frontmatter;
                    if (tags) {
                        tags.forEach((tag) => {
                            if (!allTags[tag]) {
                                allTags[tag] = {
                                    slug: tag,
                                    posts: [],
                                };
                            }
                            allTags[tag].posts.push(node);
                        });
                    }
                });
                
                const component = path.resolve(`src/layouts/TagLayout/index.jsx`);
                Object.keys(allTags).forEach(tag => {
                    const { posts, slug } = allTags[tag];
                    createPage({
                        path: `/tags/${slug}`,
                        component,
                        context: {
                            slug,
                            posts,
                            tag,
                            allTags,
                        }
                    })
                });
                
                // show list of all tags
                createPage({
                    path: '/tags',
                    component,
                    context: {
                      slug: 'tags',
                      allTags,
                    }
                });
            })
        )
    })
}