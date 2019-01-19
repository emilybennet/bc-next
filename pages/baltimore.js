import BasicLayout from "../components/BasicLayout";
// import CityGuideMap from "../components/CityGuideMap";

import dynamic from "next/dynamic";

const DynamicCityGuideMap = dynamic(
  () => import("../components/BaltimoreMap"),
  {
    loading: () => <p>Stand By...</p>,
    ssr: false
  }
);

const BaltimorePage = props => (
  <BasicLayout>
    <p>Hello Baltimore City .</p>
    <DynamicCityGuideMap />
  </BasicLayout>
);

export default BaltimorePage;
