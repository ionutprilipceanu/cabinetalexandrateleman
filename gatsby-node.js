/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {},
      },
    });
  }
};

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  // Example redirect from old URL path to new domain URL
  createRedirect({
    fromPath: '/despre',
    toPath: 'https://alexandrateleman.ro/despre-mine/',
    isPermanent: true,
    redirectInBrowser: true,
  });

  // Add more redirects as needed here
};
