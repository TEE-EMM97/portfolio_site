import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../components/layout/layout.scss';

const Blog = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          slug
          title
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`);
  
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <ol className="posts">
        {data.allContentfulBlogPost.edges.map((edge, i) => {
          return (
            <li className="posts" key={i}>
              <Link to={`/blog${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  )
}

export default Blog;