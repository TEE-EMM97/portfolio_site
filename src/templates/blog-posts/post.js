import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import '../../components/layout/layout.scss';

export const query = graphql`
  query ($slug: String!) {
    contentfulFakeBlogPost(slug: { eq: $slug }) {
      id
      title
      publishDate(formatString: "MMMM Do, YYYY")
      coverImages {
        id
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
      blogBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const Post = ({ data, pageContext }) => {
  console.log(data);
  console.log(pageContext);
  const { next, prev } = pageContext;
  return (
    <Layout>
      <div>
        <h1>{data.contentfulFakeBlogPost.title}</h1>
        <h1>{data.contentfulFakeBlogPost.publishDate}</h1>
        <img
          src={data.contentfulFakeBlogPost.coverImages.fluid.base64}
          alt="for cover"
        />
        <div
          dangerouslySetInnerHTML={{
            __html:
              data.contentfulFakeBlogPost.blogBody.childMarkdownRemark.html,
          }}
        />

        {next && <Link to={`blog/${next.slug}`}> Next </Link>}
        {prev && <Link to={`blog/${prev.slug}`}> Prev </Link>}
      </div>
    </Layout>
  );
};

export default Post;
