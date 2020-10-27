import styled from "styled-components";
import PropTypes from "prop-types";

const Chip = styled.li`
  display: block;
  margin-bottom: 10px;
`;

const Event = styled.span`
  border: 1px solid ${props => props.theme.aqua};
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  transition: border 0.15s;

  div {
    display: flex;
    flex-direction: row;
  }

  span {
  }

  span.event-name {
    display: flex;
    line-height: 1;
    padding: 0.4em 0.6em;
  }

  span.room-name {
    align-items: center;
    background: ${props => props.theme.aqua};
    color: ${props => props.theme.deepAbyss};
    display: flex;
    font-weight: 700;
    min-width: 4.88em;
    padding: 0 0.6em;
    transition: background 0.15s;
  }

  &:hover {
    border-color: ${props => props.theme.turquoise};

    span.room-name {
      background: ${props => props.theme.turquoise};
    }
  }
`;

const EventChip = ({ session, handleOnClick, ...props }) => (
  <Chip>
    <Event onClick={() => handleOnClick(session)}>
      <div>
        <span className="room-name">{session.short_code}</span>
        <span className="event-name">{session.event_name}</span>
      </div>
    </Event>
  </Chip>
);

EventChip.propTypes = {
  /**
   * Event session details to display
   */
  session: PropTypes.shape({
    id: PropTypes.number.isRequired,
    event_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    location_name: PropTypes.string.isRequired,
    short_code: PropTypes.string.isRequired,
    bcc_room_number: PropTypes.string.isRequired,
    track_name: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired,
    mature: PropTypes.bool.isRequired
  }).isRequired,
  /**
   * What to do when the thing is clicked
   */
  handleOnClick: PropTypes.func.isRequired
}

export default EventChip;
