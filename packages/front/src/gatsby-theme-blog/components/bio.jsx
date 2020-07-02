/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Styled, css, Flex } from 'theme-ui'
import BioContent from './bio-content'

const Div = Styled.div

const Bio = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
        summary
        siteUrl
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  const {
    site: {
      siteMetadata: { author, siteUrl, summary },
    },
    avatar,
  } = data

  return (
    <Flex css={css({ mb: 4, alignItems: 'center' })}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <Div>
        <BioContent siteUrl={siteUrl} author={author} summary={summary} />
      </Div>
    </Flex>
  )
}

export default Bio
