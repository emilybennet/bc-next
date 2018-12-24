import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import EapBanner from "./EapBanner";

const BasicLayout = withRouter(({ router, ...props }) => {
  const titleString = `${
    props.pageTitle ? props.pageTitle + " •" : ""
  } BronyCon 2019`;
  return (
    <React.Fragment>
      <Head>
        <title>{titleString}</title>
        <meta property="og:title" content={titleString} />
        <meta
          property="og:url"
          content={`https://bronycon.org${router.pathname}`}
        />
      </Head>
      <EapBanner />
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
});

export default BasicLayout;
