/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require('dotenv').config();
module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, 
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL:  process.env.MyUrl,
      queryLimit: 1000, // Defaults to 100
      collectionTypes: [`jobs`,`projects`],
    },
  },
],
}
