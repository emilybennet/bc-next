import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const BasicLayout = props => {
  const titleString = `${
    props.pageTitle ? props.pageTitle + " •" : ""
  } BronyCon 2019`;
  return (
    <React.Fragment>
      <Head>
        <title>{titleString}</title>
        <meta property="og:title" content={titleString} />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default BasicLayout;
