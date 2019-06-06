import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Blog page</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => (
          <li>
            <h2>{post.node.frontmatter.title}</h2>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
