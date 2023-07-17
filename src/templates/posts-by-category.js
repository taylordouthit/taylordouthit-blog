import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"

const PostsByCategoryTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`${pageContext.tag} posts`} />
      <h1 itemProp="headline">{pageContext.tag.replace("_", " ")}</h1>
      <Posts posts={posts} />
    </Layout>
  )
}

export default PostsByCategoryTemplate

export const pageQuery = graphql`
  query PostsByCat($categoryFilter: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { regex: $categoryFilter } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        timeToRead
      }
    }
  }
`
