/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog-posts/index.js');
  const res = await graphql(
    `
      query {
        allContentfulFakeBlogPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
  );
  const posts = res.data.allContentfulFakeBlogPost.edges;
  posts.forEach(({ node }, i) => {
    createPage({
      path: `blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
        next: i === posts.length - 1 ? null : posts[i + 1].node,
        prev: i === 0 ? null : posts[i - 1].node,
      },
    });
  });
};
