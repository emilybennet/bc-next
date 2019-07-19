import React from "react";
import styled from "styled-components";
import moment from "moment";
import EventChip from "./EventChip";
import TimeDymo from "./TimeDymo";

const ContainerSheet = styled.section`
  background: ${props => props.theme.deepAbyss};
  border-top: 4px solid ${props => props.theme.aqua};
  display: flex;
  /* min-height: 700px; */
  padding: 1.66em 1.66em 1.66em 4.44em;
  position: relative;
  &:after {
    box-shadow: 0 -0.5em 2.5em rgba(0, 0, 0, 0.7);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: -4px;
    width: 100%;
    z-index: -1;
  }
`;

const Timeline = styled.div`
  background: ${props => props.theme.ruby};
  margin-right: 4.444em;
  min-width: 2px;
  min-height: 100px;
  position: relative;
  &:before,
  &:after {
    background: ${props => props.theme.ruby};
    border-radius: 7px;
    content: "";
    display: block;
    height: 14px;
    margin-left: -6px;
    position: absolute;
    width: 14px;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
`;

const AssistiveHourSpacer = styled.hr`
  border: none;
  height: 2.22em;
  &:first-of-type {
    display: none;
  }
`;

const Content = styled.div`
  padding: 3em 0;
  position: relative;
`;

const ScheduleSheet = ({ eventData, activeTabKey, openDetailModal }) => {
  let currentHourMarker = null;

  return (
    <ContainerSheet>
      <Timeline />
      <Content>
        {eventData[activeTabKey].map(ev => {
          let eventTime = moment(ev.start_time).format("h:mma");

          if (currentHourMarker != eventTime) {
            currentHourMarker = eventTime;
            return (
              <React.Fragment key={ev.id}>
                <AssistiveHourSpacer />
                <TimeDymo time={eventTime} />
                <EventChip
                  className="first-event-of-time"
                  session={ev}
                  key={ev.id}
                  handleOnClick={openDetailModal}
                />
              </React.Fragment>
            );
          }

          return (
            <EventChip
              session={ev}
              key={ev.id}
              handleOnClick={openDetailModal}
            />
          );
        })}
      </Content>
    </ContainerSheet>
  );
};

export default ScheduleSheet;
