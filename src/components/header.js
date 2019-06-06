import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "../components/header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link className={headerStyles.link} to="about">
            About
          </Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
