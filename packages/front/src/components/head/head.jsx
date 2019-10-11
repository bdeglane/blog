import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { shape, string } from 'prop-types'

Metadata.propTypes = {
  data: shape({
    site: shape({
      siteMetadata: shape({
        title: string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

function Metadata({ data }) {
  const description = 'A simple blog'

  return (
    <Helmet
      title={data.site.siteMetadata.title}
      defaultTitle={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: description },
      ]}
    >
      <html lang="fr" />
      <link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
    </Helmet>
  )
}

export const Head = props => (
  <StaticQuery
    query={graphql`
      query HeadQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Metadata data={data} {...props} />
    )}
  />
)
