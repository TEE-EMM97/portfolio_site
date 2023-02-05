import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export const SiteSeo = ({ title, description, keywords, lang, image, url }) => {
  const query = graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
          author
        }
      }
    }
  `;
  const metaKeywords = [
    "tevon",
    "tee-emm97",
    "front-end engineer",
    "web developer",
    "javascript",
    "northwest",
    "manchester",
    "ibethatlo",
    "gatsby portfolio",
    "contentful cms",
  ];

  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, siteUrl, twitterUsername, author } =
    site.siteMetadata;

  const metaDesc = description || defaultDescription;

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={`${title} | ${defaultTitle} `}
      meta={[
        {
          name: `description`,
          content: metaDesc,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:author`,
          content: author,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:creator`,
          content: twitterUsername,
        },
        {
          property: `twitter:title`,
          content: twitterUsername,
        },
        {
          property: `twitter:description`,
          content: metaDesc,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  );
};

SiteSeo.defaultProps = {
  title: null,
  lang: `en`,
  meta: [],
  image: null,
  description: null,
};

SiteSeo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};
