import React from "react";
import { Layout } from "../components/layout";
import { Hello } from "../components/layout/hello";
import { Experience } from "../components/layout/experience";
import { Skills } from "../components/layout/skills";
import { useStaticQuery, graphql } from "gatsby";
import { SiteSeo } from "../components/SiteSeo";
import { HomeBlogSection as BlogSection } from "../components/layout/HomeBlogSection/HomeBlogSection";
import { Projects } from "../components/layout/projectSect";

const Home = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <SiteSeo siteTitle={data.site.siteMetadata.title} title="Home" />
      <Hello siteDescription={data.site.siteMetadata.description} />
      <Skills />
      <Experience />
      <BlogSection />
      <Projects />
    </Layout>
  );
};

export default Home;
