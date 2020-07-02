import React from 'react'

export default function Bio({ siteUrl, author, summary }) {
  return (
    <>
      <a href={siteUrl}>{author}</a>
      <p>{summary}</p>
    </>
  )
}
