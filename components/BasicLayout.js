import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const BasicLayout = props => (
  <React.Fragment>
    <Head>
      <title>
        {props.pageTitle ? `${props.pageTitle} • ` : ""} BronyCon 2019
      </title>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default BasicLayout;
