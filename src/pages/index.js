import React from 'react';
import Layout from '../components/layout';
import Hello from '../components/layout/hello';
import Experience from '../components/layout/experience';
import Skills from '../components/layout/skills';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from '../components/seo';
import Blog from '../components/layout/blog';
import Projects from '../components/layout/projectSect';
import MusicPlayer from '../components/layout/musicPlayer';

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
      <Seo siteTitle={data.site.siteMetadata.title} title="Home" />
      <Hello siteDescription={data.site.siteMetadata.description} />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Blog /> */}
      {/* <Projects /> */}
      <MusicPlayer/>
    </Layout>
  );
};

export default Home;
