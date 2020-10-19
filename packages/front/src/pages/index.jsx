import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/layout'
import { Head } from '../components/head'

import styles from './index.module.css'

const IndexPage = () => (
  <Layout gradient>
    <Head title="Home" />
    <h1>Hi people</h1>
    <p>Now go gh-pages with auto deploy</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className={styles.index__logos}>
        <img src="/javascript.svg" alt="javascript logo" />
        <img src="/nodejs.svg" alt="nodejs logo" />
        <img src="/react.svg" alt="react logo" />
        <img src="/angular.svg" alt="angular logo" />
        <img src="/graphql.svg" alt="graphql logo" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/posts/">Go to blog</Link>
  </Layout>
)

export default IndexPage
