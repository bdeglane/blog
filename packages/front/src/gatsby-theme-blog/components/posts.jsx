import React from 'react'
import Footer from 'gatsby-theme-blog/src/components/home-footer'
import PostList from 'gatsby-theme-blog/src/components/post-list'
import { Layout } from '../../components/layout'
import { Head } from '../../components/head'

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout>
    <Head title={siteTitle}/>
    <main>
      <PostList posts={posts} />
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
