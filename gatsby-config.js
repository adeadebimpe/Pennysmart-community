module.exports = {
	siteMetadata: {
		title: `Pennysmart Community`,
		description: `We are students, working professionals, business founders, and local traders; our community represents a fine mix of amazing individuals. We host members to amazing events and we invite you to join us on this wonderful journey to groom the next wealthy generation of Africans.`,
		author: `@adeadebimpe`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-react-svg`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				display: `minimal-ui`,
				icon: `src/images/Favicon.png` // This path is relative to the root of the site.
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
