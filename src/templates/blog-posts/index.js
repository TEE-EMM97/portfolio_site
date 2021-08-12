import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import './post.scss';
import '../../components/layout/layout.scss';
// import { convertToBgImage } from 'gbimage-bridge';
// import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishDate(formatString: "MMMM Do, YYYY")
      updatedAt(formatString: "MMMM Do, YYYY")
      author
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
  const blogTitle = data.contentfulBlogPost.title;
  const blogHero = getImage(
    data.contentfulBlogPost.coverImages.gatsbyImageData
  );
  const author = data.contentfulBlogPost.author;
  const timeToRead =
    data.contentfulBlogPost.blogBody.childMarkdownRemark.timeToRead;
  const publishDate = data.contentfulBlogPost.publishDate;
  const subTitle = data.contentfulBlogPost.subTitle;

  console.log(
    `Stuff ${blogTitle},${author}, ${timeToRead}, ${publishDate}, ${subTitle}`
  );

  return (
    <Layout>
      <Seo title={blogTitle} />
      <div className="blog-post">
        <GatsbyImage
          className="blog-post__hero"
          image={blogHero}
          alt={author}
        />
        <h1 className="blog-post__title">{blogTitle}</h1>
        <h6 className="blog-post__details">
          📆 {publishDate} • ☕️ {`${timeToRead} min to read`}
        </h6>
        <hr />

        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.blogBody.childMarkdownRemark.html,
          }}
        />

        <hr />
        <div className="tweet-me">
          <a
            href="https://twitter.com/intent/tweet?screen_name=est_tm97&ref_src=twsrc%5Etfw"
            className="twitter-mention-button"
            data-text="Hey, I think you&#39;re wrong and here&#39;s the reason why..."
            data-show-count="false"
            target="__blank"
          >
            Tweet to @est_tm97
          </a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
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
