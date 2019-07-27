import React, { useState } from "react";
import styled from "styled-components";

import Directive from "../common/Directive";
import SectionHeading from "../common/SectionHeading";

import ScheduleTabs from "./ScheduleTabs";
import ScheduleSheet from "./ScheduleSheet";
import EventDetailModal from "./EventDetailModal";

const Container = styled.section`
  margin: 0 auto;
  padding: 3em 0;
  max-width: 1200px;
`;

const TAB_CONTENT = [
  {
    name: "Thursday",
    key: "thursday"
  },
  {
    name: "Friday",
    key: "friday"
  },
  {
    name: "Saturday",
    key: "saturday"
  },
  {
    name: "Sunday",
    key: "sunday"
  }
];

const SchedulePage = props => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [eventDetailModalOpen, setEventDetailModalOpen] = useState(false);
  const [eventDetailModalInfo, setEventDetailModalInfo] = useState({
    id: 999,
    event_name: "My Little Awesome Event",
    description: "It's the best.",
    start_time: "2019-09-14 00:01:00",
    end_time: "2019-09-14 00:31:00",
    location_name: "BCC",
    short_code: "NULL",
    bcc_room_number: "Hall Zero",
    fee: 14,
    mature: false
  });

  const closeDetailModal = () => setEventDetailModalOpen(false);

  const openDetailModal = session => {
    setEventDetailModalInfo(session);
    setEventDetailModalOpen(true);
  };

  return (
    <React.Fragment>
      <Directive>Situational Chronology</Directive>

      <Container>
        <SectionHeading text="Schedule" echo="Schedule" />
        <ScheduleTabs
          tabs={TAB_CONTENT}
          activeTab={activeTabIndex}
          setActiveTab={setActiveTabIndex}
        />
        <ScheduleSheet
          eventData={props.eventData}
          activeTabKey={TAB_CONTENT[activeTabIndex].key}
          openDetailModal={openDetailModal}
        />
      </Container>
      <EventDetailModal
        showModal={eventDetailModalOpen}
        handleClose={closeDetailModal}
        session={eventDetailModalInfo}
      />
    </React.Fragment>
  );
};

export default SchedulePage;
