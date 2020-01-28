import React from 'react'
import { node } from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Body, Header, BDLogo, Skull } from '@bd/components'

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
      <Header>
        <Link to="/">
          <BDLogo
            className={styles.layout__headerLogo}
            pathClassName={styles.layout__headerLogoPath}
            title={data.site.siteMetadata.title}
            skull
          />
        </Link>
      </Header>

      <Body className={styles.layout__body}>
        <main>{children}</main>
      </Body>

      <footer className={styles.layout__footer}>
        <Link to="/" title="to home page">
          <Skull dark className={styles.layout__footerLogo} />
        </Link>
      </footer>
    </section>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}
