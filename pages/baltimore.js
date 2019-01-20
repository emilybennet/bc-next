import Head from "next/head";
import MapLayout from "../components/MapLayout";

const BaltimorePage = props => (
  <React.Fragment>
    <Head>
      <title>Baltimore • BronyCon 2019</title>
      <meta property="og:title" content="Baltimore • BronyCon" />
      <meta property="og:url" content="https://bronycon.org/baltimore" />
    </Head>
    <MapLayout />
  </React.Fragment>
);

export default BaltimorePage;
