import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { withRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import EapBanner from "../EapBanner";

const BasicLayout = withRouter(({ router, ...props }) => {
  const titleString = `${
    props.pageTitle ? props.pageTitle + " •" : ""
  } BronyCon 2019`;
  const path = router && router.pathname ? router.pathname : ""
  return (
    <React.Fragment>
      <Head>
        <title>{titleString}</title>
        <meta property="og:title" content={titleString} />
        <meta
          property="og:url"
          content={`https://bronycon.org${path}`}
        />
      </Head>
      <EapBanner />
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
});

BasicLayout.propTypes = {
  /**
   * text for tab/title bar
   */
  pageTitle: PropTypes.text,
  /**
   * Markup to render in layout, use StyledComponents to create appropriate wrapping/alignment
   */
  children: PropTypes.node.isRequired
}

export default BasicLayout;
