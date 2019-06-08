import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h1>I'm Brian</h1>
      <p>Need a developer</p>
      <Link to="/contact">Need a developer</Link>
    </Layout>
  )
}

export default IndexPage
