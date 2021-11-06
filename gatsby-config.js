const config = require('./src/config');
const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'production') {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
  })
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
  })
}

const { githubApiQuery } = require('./src/utils/github-api.js')

module.exports = {
  siteMetadata: {
    title: "@tm97",
    description:"My name is Tev, I help developers, designers, and SME's bring their ideas to life; on time, and on budget. Powered by VS Code, Figma, and Supermalt.",
    author: config.name,
    url: "https://tm97.gatsbyjs.io",
    twitterUsername: "est__tm97",
    image: "./"
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint
  
        // token: required by the GitHub API
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  
        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,
  
        // variables: defaults to variables needed for a search query
        variables: {
          github_login: process.env.GITHUB_LOGIN
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
  ],
};
