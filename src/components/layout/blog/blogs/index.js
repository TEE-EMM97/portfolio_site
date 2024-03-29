import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Blogs = () => {
    const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          coverImages{
            id
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          blogBody {
              childMarkdownRemark {
                excerpt(pruneLength: 150)
          }
          }
      }
    }
  }
  }
  `);

  console.log('Blogs:', data)

  return (
      <Layout>
      <Seo title="Blog" />
      <h1>Blogs</h1>
      <ol className="posts">
        {data.allContentfulBlogPost.edges.map((edge, i) => {
          return (
            <li className="posts" key={i}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p className="excerp">{edge.node.blogBody.childMarkdownRemark.excerpt}</p>
                <p>{edge.node.publishDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  )
}

export default Blogs