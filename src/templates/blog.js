import React from "react"
import { useStaticquery } from "gatsby"
import Layout from "../components/layout"

const Blog = () => {
  const post = useStaticquery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            rawMarkdownBody
            html
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1>This is the blog template</h1>
      </div>
    </Layout>
  )
}

export default Blog
