import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PostHero from 'gatsby-theme-blog/src/components/post-hero'
import PostTitle from 'gatsby-theme-blog/src/components/post-title'
import PostDate from 'gatsby-theme-blog/src/components/post-date'
import PostFooter from 'gatsby-theme-blog/src/components/post-footer'
import { Layout } from '../../components/layout'
import { Head } from '../../components/head'

/* eslint-disable react/prop-types */
const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location, // eslint-disable-line
  previous,
  next,
}) => (
  <Layout title={title}>
    <Head
      title={post.title}
      description={post.excerpt}
      imageSource={post.socialImage
        ? post.socialImage?.childImageSharp?.fluid.src
        : post.image?.childImageSharp?.fluid.src}
      keywords={post.keywords}
      imageAlt={post.imageAlt}
    />
    <main>
      <PostHero post={post} />
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date}</PostDate>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
