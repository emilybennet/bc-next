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
  line-height: 1.4;
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
  em {
    color: rgba(255, 255, 255, 0.4);
    size: 0.4em;
  }
`;

const Disclaimer = styled.p`
  color: ${props => props.theme.aqua};
  font-style: italic;
  margin-bottom: 0;
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

  const formatDuration = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = (seconds % 3600) / 60;

    const hoursString = hours > 0 ? `${hours} hr` : "";
    const minutesString = minutes > 0 ? `${minutes} min.` : "";

    return `${hoursString} ${minutesString}`.trim();
  };

  const formatLocationText = (bcName, roomNo) =>
    `${bcName} <small><em>[${roomNo}]</em></small>`;

  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) =>
    `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

  return (
    <ModalContainer style={{ display: show }}>
      <ModalBox>
        <CloseButton action={handleClose} />
        <SessionName>{session.event_name}</SessionName>
        <SessionDescription
          dangerouslySetInnerHTML={{
            __html: marked.inlineLexer(session.description, [], {
              renderer: renderer
            })
          }}
        />
        <SessionMetric>
          <label>Location</label>
          <span
            dangerouslySetInnerHTML={{
              __html: formatLocationText(
                session.location_name,
                session.bcc_room_number
              )
            }}
          />
        </SessionMetric>
        <Metric
          label="Start"
          value={moment(session.start_time).format("MMMM D, YYYY @ h:mma")}
        />
        <Metric label="Duration" value={formatDuration(session.duration)} />
        {session.fee ? <Metric label="Fee" value={`$${session.fee}`} /> : ""}
        <Metric label="Type" value={session.track_name} />
        {session.location_name === "Crusaders' Clubhouse" ? (
          <Disclaimer>
            Crusaders' Clubhouse is limited to youth attendees and their
            families.
          </Disclaimer>
        ) : (
          ""
        )}
        {session.mature ? (
          <Disclaimer>
            This session contains mature content and is restricted to attendees
            21 or older.
          </Disclaimer>
        ) : (
          ""
        )}
      </ModalBox>
    </ModalContainer>
  );
};

export default EventDetailModal;
