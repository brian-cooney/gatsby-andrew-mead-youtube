import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD, MM, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog page</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
            </Link>
            <p>{edge.node.publishedDate}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
