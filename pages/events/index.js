import axios from "axios";

import BasicLayout from "../../components/common/BasicLayout";
import EventSchedule from "../../components/EventSchedule";
import eventData from "../../content/eventsList.json";

const SchedulePage = (props) => (
  <BasicLayout pageTitle="Event Schedule">
    <EventSchedule {...props} />
  </BasicLayout>
);

SchedulePage.getInitialProps = async () => {
  // const res = await axios.get("https://intel.bronycon.org/api/events/list/");
  // const eventData = await res.data;

  return { eventData };
};

export default SchedulePage;
