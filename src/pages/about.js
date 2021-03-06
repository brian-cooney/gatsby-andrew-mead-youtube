import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Head from "../components/head"

const About = () => {
  return (
    <div>
      <Head title="About" />
      <Header />
      <h1>About page</h1>
      <h1>
        you can find my details on my contact page
        <Link to="/contact">Contact Page</Link>
      </h1>
      <Footer />
    </div>
  )
}

export default About
