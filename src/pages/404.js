import React from "react";

import { Layout } from "../components/layout";
import { SiteSeo } from "../components/SiteSeo";

const NotFoundPage = () => (
  <Layout>
    <SiteSeo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist... the sadness. the despair.
      the agony. we are lost.
    </p>
  </Layout>
);

export default NotFoundPage;
