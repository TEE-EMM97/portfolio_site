import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Fade from "react-reveal/Fade";
import "../layout.scss";

export const HomeBlogSection = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { publishDate: DESC }, limit: 4) {
        edges {
          node {
            id
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
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
  const {
    allContentfulBlogPost: { edges: blogPosts },
  } = blogData;

  return (
    <section className="section blogs">
      <Fade>
        <div className="section__title">
          <h4>
            3. <span>blogs</span>
          </h4>
        </div>
        <div className="section__content">
          <ol className="blogs__posts">
            {blogPosts.map((edge, i) => {
              return (
                <li className="blogs__post" key={i}>
                  <Link to={`/${edge.node.slug}`}>
                    <h5>
                      {edge.node.title}
                      <i
                        className="bi-arrow-right"
                        role="img"
                        aria-label="arrow-right"
                      />
                    </h5>
                    <p>
                      <span role="img" aria-label="emoji-calendar">
                        📆
                      </span>{" "}
                      {edge.node.publishDate} • ☕️{" "}
                      {edge.node.blogBody.childMarkdownRemark.timeToRead} min
                      read
                    </p>
                    <p className="excerp">
                      {edge.node.blogBody.childMarkdownRemark.excerpt}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </Fade>
    </section>
  );
};
