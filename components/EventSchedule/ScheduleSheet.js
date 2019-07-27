import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import EventChip from "./EventChip";
import TimeDymo from "./TimeDymo";

const ContainerSheet = styled.section`
  background: ${props => props.theme.deepAbyss};
  border-top: 4px solid ${props => props.theme.aqua};

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

const TimelineContainer = styled.div`
  display: flex;
`;

const TimelineControls = styled.div`
  font-weight: bold;
  margin-bottom: 2em;
  text-transform: uppercase;
  text-align: right;
  label span {
    letter-spacing 1.5px;
  }
  label {
    position: relative;
  }
  select {
    background: transparent;
    border: 1px solid ${props => props.theme.aqua};
    color: ${props => props.theme.aqua};
    cursor: pointer;
    font-size: 1em;
    margin: 0 0 0 1em;
    padding: 3px 25px 3px 6px;
    position: relative;
    transition: all .15s;
    z-index: 2;
    -webkit-appearance: none;
    &:hover {
      border-color: ${props => props.theme.turquoise};
      color: ${props => props.theme.turquoise};
    }
    :focus {
      outline: none;
      color: ${props => props.theme.aqua};
      box-shadow: 0 0 0 1px ${props => props.theme.midnight},
        0 0 0 4px ${props => props.theme.sapphire};
    }
  }
    &:after {
      content: "▾";
      color: ${props => props.theme.aqua};
      position: relative;
      left: -20px;
      z-index: 1;
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

const Error = styled.div`
  color ${props => props.theme.ruby};
  font-family: ${props => props.theme.plex};
`;

const SessionsList = ({ sessions, openDetailModal }) => {
  let currentHourMarker = null;

  return (
    <React.Fragment>
      {sessions.map(ev => {
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
          <EventChip session={ev} key={ev.id} handleOnClick={openDetailModal} />
        );
      })}
    </React.Fragment>
  );
};

const ScheduleSheet = ({ eventData, activeTabKey, openDetailModal }) => {
  const [filterSessionsBy, setFilterSessionsBy] = useState(false);
  let sessions = [];

  if (filterSessionsBy) {
    sessions = eventData[activeTabKey].filter(
      ev => ev.track_name.toLowerCase() === filterSessionsBy
    );
  } else {
    sessions = eventData[activeTabKey];
  }

  const handleFilterChange = ev => {
    const value = ev.target.value;
    const filterBy = value === "all" ? false : value.toLowerCase();
    setFilterSessionsBy(filterBy);
  };

  return (
    <ContainerSheet>
      <TimelineControls>
        <label>
          <span>Show:</span>
          <select onChange={handleFilterChange}>
            <option value="all">All Events</option>
            <option value="activities">Activities</option>
            <option value="autographs">Autographs</option>
            <option value="concerts">Concerts</option>
            <option value="games + tournaments">Games + Tournaments</option>
            <option value="panels">Panels</option>
            <option value="workshops">Workshops</option>
          </select>
        </label>
      </TimelineControls>
      <TimelineContainer>
        <Timeline />
        <Content>
          {sessions.length ? (
            <SessionsList
              sessions={sessions}
              openDetailModal={openDetailModal}
            />
          ) : (
            <Error>[ No scheduled events ]</Error>
          )}
        </Content>
      </TimelineContainer>
    </ContainerSheet>
  );
};

export default ScheduleSheet;
