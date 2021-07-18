import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade'
import '../layout.scss'

const Blog = ({pageContext}) => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulFakeBlogPost(sort: { fields: [publishDate], order: DESC }, limit:4) {
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
                timeToRead
                excerpt(pruneLength: 250)
          }
          }
      }
    }
  }
  }
  `);
  
  console.log('Blogs:', data)
  console.log("Here", pageContext)
  return (
    <section className="section blogs">
      <Fade>
        <div className="section__title">
          <h3>Blogs</h3>
        </div>
        <div className="section__content">
        <ol className="blogs__posts">
        {data.allContentfulFakeBlogPost.edges.map((edge, i) => {
          return (
            <li className="blogs__post" key={i}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h5>{edge.node.title} <i className="bi-arrow-right" role="img" aria-label="arrow-right"/></h5>
                <p>📆 {edge.node.publishDate} • ☕️ {edge.node.blogBody.childMarkdownRemark.timeToRead} MIN READ</p>
                <p className="excerp">{edge.node.blogBody.childMarkdownRemark.excerpt}</p>
              </Link>
            </li>
          );
        })}
      </ol>
        </div>
      </Fade>
    </section>
  )
}

export default Blog
