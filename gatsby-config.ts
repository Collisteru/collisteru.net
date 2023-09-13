import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Collisteru`,
    siteUrl: `https://www.collisteru.net`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // TODO: Configure this properly.
  //   {
  //   resolve: 'gatsby-source-wordpress',
  //   options: {
  //     "url": "www.collisteru.net"
  //   }
  // }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-postcss", 
  // TODO: Find out what's wrong with the given Google Gtag
  // "gatsby-plugin-google-gtag", 
  // {
  //   resolve: 'gatsby-plugin-google-gtag',
  //   options: {
  //     trackingIds: ['G-9R1GR8FWV5']
  //   },
  // }, 
  "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    },
  }, "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
