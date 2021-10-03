/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Lambomoon Ventures`,
    siteUrl: `https://lambomoon.ventures`,
    description: `A VC focused on Moonbeam and Polkadot ecosystem`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lambomoon Ventures`,
        short_name: `Lambomoon Ventures`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/logo-short.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169204893-6",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
