module.exports = {
  pathPrefix: '/personal',
  siteMetadata: {
    title: 'B. Deglane',
    description: 'My Simple CV / blog',
    author: 'Benoît Deglane',
    siteUrl: 'https://bdeglane.github.io',
    // Used for resolving images in social cards
    social: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/BenoitDecline',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/bdeglane',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-theme-blog',
      options: {
        // basePath defaults to `/`
        basePath: '/blog',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/app/*'] },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        // eslint-disable-next-line global-require, import/no-extraneous-dependencies
        postCssPlugins: [require('postcss-preset-env')(
          {
            stage: 3,
            importFrom: 'custom-media-definition.css',
            features: { 'custom-media-queries': true },
          })],
      },
    },
  ],
}
