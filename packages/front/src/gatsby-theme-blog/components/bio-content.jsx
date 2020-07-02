import React, { Fragment } from 'react'
import { string } from 'prop-types'

Bio.propTypes = {
  siteUrl: string.isRequired,
  author: string.isRequired,
  summary: string.isRequired,
}

export default function Bio({ siteUrl, author, summary }) {
  return (
    <Fragment>
      <a href={siteUrl}>{author}</a>
      <p>{summary}</p>
    </Fragment>
  )
}
