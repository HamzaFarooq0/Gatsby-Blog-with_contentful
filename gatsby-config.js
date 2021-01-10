const dotenv = require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Hamza Farooq',
    description: 'I\'m web developer, having knowledge of React, GraphQL, Gatsby',
    author: 'Hamza'
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ],
}
