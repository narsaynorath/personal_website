module.exports = {
  siteMetadata: {
    title: `ramblings`,
    author: {
      name: `Nar Saynorath`,
      summary: `a software developer living in Toronto who likes to talk about things.`,
    },
    description: `A personal blog where I can write about my opinions`,
    siteUrl: `https://amazing-wozniak-829c73.netlify.app/`,
    social: {
      github: `narsaynorath`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `static/favicons/favicon.ico`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ramblings`,
        short_name: `ramblings`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicons/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
