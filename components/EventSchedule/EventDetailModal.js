import styled from "styled-components";
import moment from "moment";
import marked from "marked";

import CloseButton from "./CloseButton";

const ModalContainer = styled.div`
  align-items: center;
  background: rgba(8, 37, 47, 0.8);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

const ModalBox = styled.section`
  background: ${props => props.theme.black};
  display: inline-block;
  max-width: 100vw;
  padding: 1.11em 2.22em 2em;
  position: relative;
  width: 830px;

  @media (max-width: 800px) {
    padding-top: 4em;
    padding-bottom: 5em;
    width: 95vw;
  }
`;

const SessionName = styled.h3`
  color: ${props => props.theme.gold};
  font-family: ${props => props.theme.plex};
  line-height: 1;
  font-size: 1.66em;
  font-style: italic;
  font-weight: 300;
  padding-right: 1em;
`;

const SessionDescription = styled.p`
  font-size: 1.11em;
  line-height: 1.66em;
  a {
    color: ${props => props.theme.aqua};
    text-decoration: underline;
    transition: color 0.15s;
    &:hover {
      color: ${props => props.theme.turquoise};
    }
  }
`;

const SessionMetric = styled.p`
  margin: 0;
  label {
    color: ${props => props.theme.gold};
    display: inline-block;
    width: 6.38em;
  }
`;

const Metric = ({ label, value }) => (
  <SessionMetric>
    <label>{label}</label>
    {value}
  </SessionMetric>
);

const EventDetailModal = ({ showModal = false, handleClose, session }) => {
  const show = showModal ? "flex" : "none";

  moment.updateLocale("en", {
    relativeTime: {
      h: "1 hour",
      d: "1 day"
    }
  });

  const formattedDuration = moment
    .duration(moment(session.end_time).diff(moment(session.start_time)))
    .humanize();

  return (
    <ModalContainer style={{ display: show }}>
      <ModalBox>
        <CloseButton action={handleClose} />
        <SessionName>{session.event_name}</SessionName>
        <SessionDescription
          dangerouslySetInnerHTML={{
            __html: marked.inlineLexer(session.description, [])
          }}
        />
        <Metric label="Location" value={session.location_name} />
        <Metric
          label="Start"
          value={moment(session.start_time).format("MMMM D, YYYY @ h:mma")}
        />
        <Metric label="Duration" value={formattedDuration} />
        {session.fee ? <Metric label="Fee" value={`$${session.fee}`} /> : ""}
      </ModalBox>
    </ModalContainer>
  );
};

export default EventDetailModal;
