require("dotenv").config()
const { GATSBY_GOOGLE_TAG } = process.env
module.exports = {
  siteMetadata: {
    title: `John-Michael H. Smith | Software Engineer`,
    titleTemplate: `%s · John-Michael Smith | Software Engineer`,
    description: `Hi, I'm John-Michael Smith, a Software Engineer currently living in
    Metro-Atlanta. I studied Computer Science at the University of Georgia
    as an Honors Student and graduated cum laude in 2019, where I also
    received a certificate in Applied Data Science.`,
    author: `@jp3isme`,
    url: "https://j-mhs.com",
    image: "src/images/me_white.PNG",
    twitterUsername: "@jp3isme",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: GATSBY_GOOGLE_TAG,
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/me_icon_white.png`, // This path is relative to the root of the site.
        border_radius: "0.75rem",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
