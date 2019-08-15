const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.

  if (node.internal.type === `MarkdownRemark`) {
    console.log(JSON.stringify(node, undefined, 2));
    const slug = path.basename(node.fileAbsolutePath, `.md`)

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const studentTemplate = path.resolve(`./src/pages/student.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/student/${edge.node.fields.slug}`,
      component: studentTemplate,
      context: {
        slug: edge.node.fields.slug
      },
    })
  })

};