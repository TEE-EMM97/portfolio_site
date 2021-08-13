import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import './post.scss';
import '../../components/layout/layout.scss';
import { getImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';
import Hero from '../../components/common/hero';
import Bio from '../../components/common/bio';
import PostPagination from '../../components/common/postpagination';

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

const Post = (props) => {
  const {
    data: {
      contentfulBlogPost: {
        title,
        publishDate,
        // updatedAt,
        author,
        coverImages: { gatsbyImageData },
        blogBody: {
          childMarkdownRemark: { html, timeToRead },
        },
      },
    },
    pageContext: { next, prev },
  } = props;

  const blogTitle = title;
  const blogHero = getImage(gatsbyImageData);
  const blogContent = html;

  return (
    <Layout>
      <Seo title={blogTitle} />
      <div className="blog-post">
        <Hero blogHero={blogHero} author={author} className="blog-post__hero" />
        <h1 className="blog-post__title">{blogTitle}</h1>
        <h6 className="blog-post__details"><span role="img" aria-label="emoji-calendar">📆</span> {publishDate} • ☕️ {`${timeToRead} min to read`}
        </h6>
        <hr />

        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{
            __html: blogContent,
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
            Tweet me on Twitter
          </a>

          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
        <div className="personal">
          <p>
            <Link to={'/'}>{author}</Link>
          </p>
          <Bio />
        </div>

        <PostPagination next={next} prev={prev} />
      </div>
    </Layout>
  );
};

export default Post;
