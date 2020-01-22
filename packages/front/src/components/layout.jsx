import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Body, Header } from '@bd/components'

import styles from './layout.module.css'


export function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <section className={styles.layout}>
      <Header className={styles.layout__header}>
        <Link to="/">
          {data.site.siteMetadata.title}
        </Link>
      </Header>

      <Body className={styles.layout__body}>
        <main>{children}</main>
      </Body>

      <footer className={styles.layout__footer}>
        ©
        {' '}
        {new Date().getFullYear()}
        , Built with
        {' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
