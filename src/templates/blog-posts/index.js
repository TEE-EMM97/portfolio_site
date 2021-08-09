import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import './post.scss';
import '../../components/layout/layout.scss';
// import { convertToBgImage } from 'gbimage-bridge';
// import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../../components/seo';

export const query = graphql`
  query ($slug: String!) {
    contentfulFakeBlogPost(slug: { eq: $slug }) {
      id
      title
      publishDate(formatString: "MMMM Do, YYYY")
      updatedAt(formatString: "MMMM Do, YYYY")
      coverImages {
        id
        gatsbyImageData(
          placeholder: TRACED_SVG
          quality: 100
          resizingBehavior: SCALE
          formats: [AUTO, WEBP]
        )
      }
      blogBody {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;

const Post = ({ data, pageContext }) => {
  console.log(data);
  console.log(pageContext);
  const { next, prev } = pageContext;
  const blogTitle = data.contentfulFakeBlogPost.title;
  const blogImage = getImage(
    data.contentfulFakeBlogPost.coverImages.gatsbyImageData
  );
  const image = blogImage;
  // const bgImage = convertToBgImage(image);
  const author = data.contentfulFakeBlogPost.author;
  const timeToRead =
    data.contentfulFakeBlogPost.blogBody.childMarkdownRemark.timeToRead;
  const publishDate = data.contentfulFakeBlogPost.publishDate;

  return (
    <Layout>
      <Seo title={blogTitle} />
      <div className="blog-post">
        <GatsbyImage className="blog-post__hero" image={image} alt={author} />
        <h1 className="blog-post__title">{blogTitle}</h1>
        <h6 className="blog-post__details">
          📆 {publishDate} • ☕️ {`${timeToRead} min to read`}
        </h6>
        <div className="blog-post__content"
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulFakeBlogPost.blogBody.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className="pagination-container">
        <div className="prev-post">
          <h5>
            {prev && (
              <Link to={`/blog/${prev.slug}`}>
                <i
                  className="bi-arrow-left"
                  role="img"
                  aria-label="arrow-left"
                />
                Prev
              </Link>
            )}
          </h5>
        </div>
        <div className="next-post">
          <h5>
            {next && (
              <Link to={`/blog/${next.slug}`}>
                Next
                <i
                  className="bi-arrow-right"
                  role="img"
                  aria-label="arrow-right"
                />
              </Link>
            )}
          </h5>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
