import React from "react";
import styled from "styled-components";

import SectionHeading from "../common/SectionHeading";

const Container = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

const EventList = styled.ul`
  list-style: none;
  margin-top: 4em;
  padding: 0;
  li {
    padding: 0 2em;
  }
  li:not(:last-of-type) {
    border-bottom: 8px dotted ${props => props.theme.black};
    margin-bottom: 1.8em;
    padding-bottom: 1.8em;
  }
`;

const StyledEvent = styled.li`
  header {
    align-items: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
      display: block;
      div.event-controls {
        margin-top: 1em;
      }
    }
  }
  h3 {
    color: ${props => props.theme.white};
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1;
    margin: 0 0 0.6em;
  }
  span.location {
    color: ${props => props.theme.aqua};
    letter-spacing: 1.5px;
  }
  div.event-controls {
    background: ${props => props.theme.abyss};
    border-radius: 6px;
    display: inline-block;
    margin-left: auto;
    a {
      color: ${props => props.theme.white};
      display: inline-block;
      font-size: 0.88em;
      font-weight: 700;
      letter-spacing: 1.5px;
      line-height: 1;
      padding: 20px 30px;
      text-transform: uppercase;
      transition: color 0.15s;
      &:hover {
        color: ${props => props.theme.gold};
      }
      &:after {
        content: " >";
      }
      &:not(:last-child) {
        border-right: 1px solid ${props => props.theme.turquoise};
      }
    }
  }
`;

const PREMIER_EVENTS = [
  {
    name: "Opening Ceremonies",
    loc: "Thursday @ 6pm – Mane Event's Hall"
  },
  {
    name: "BronyPalooza",
    loc:
      "Thursday @ 7pm – Mane Event's Hall<br/>Friday @ 11pm – Mane Event's Hall<br/>Saturday @ 8pm — Mane Event's Hall",
    controls: [
      {
        text: "See Lineup",
        url: "/events/bronypalooza"
      }
    ]
  },
  {
    name: "Crystal Café",
    loc: "Friday @ 9am, 2pm, 4pm – Hall of the Stars",
    controls: [
      {
        text: "Buy Tickets",
        url: "/cafe"
      }
    ]
  },
  {
    name: "Grand Galloping Gala",
    loc: "Friday @ 7pm – Mane Event's Hall",
    controls: [
      {
        text: "Dress Code",
        url: "/policies/gala"
      }
    ]
  },
  {
    name: "Cosplay Fashion Show",
    loc: "Saturday – Hall of the Sun",
    controls: [
      {
        text: "Pre-Register",
        url: "https://forms.gle/o951GjAVVbC2dSCw9"
      },
      {
        text: "Rules",
        url: "/policies/cosplay-fashion-show"
      }
    ]
  },
  {
    name: "Hall Cosplay Contest",
    loc: "Saturday @ 9:30am–2pm – Pre-judging Room",
    controls: [
      {
        text: "Pre-Register",
        url: "https://forms.gle/9Fa4YEQ42XYm6coc7"
      },
      {
        text: "Rules",
        url: "/policies/hall-cosplay-contest"
      }
    ]
  },
  {
    name: "BronyCon Talent Show",
    loc: "Sunday @ 11:30am – Mane Event's Hall"
  },
  {
    name: "Annual Charity Auction",
    loc: "Sunday @ 1:30pm – Mane Event's Hall",
    controls: [
      {
        text: "Donate",
        url: "https://goo.gl/forms/QkF9ffKA1N2rl6353"
      }
    ]
  },
  {
    name: "Blank Canvas's Marketplace",
    loc:
      "Thursday @ 2–8pm <br/> Friday–Saturday @ 10am–6pm <br /> Sunday @ 10am–4pm"
  }
];

const EventControls = ({ controls }) => {
  return (
    <div className="event-controls">
      {controls.map((c, i) => (
        <a key={i} href={c.url}>
          {c.text}
        </a>
      ))}
    </div>
  );
};

const Event = ({ name, loc, controls = false }) => (
  <StyledEvent>
    <header>
      <div>
        <h3>{name}</h3>
        <span className="location" dangerouslySetInnerHTML={{ __html: loc }} />
      </div>
      {controls && <EventControls controls={controls} />}
    </header>
  </StyledEvent>
);

const PremierEvents = () => (
  <Container id="premier">
    <SectionHeading text="Survey the Fun" id="events" />
    <EventList>
      {PREMIER_EVENTS.map((ev, i) => (
        <Event {...ev} key={i} />
      ))}
    </EventList>
  </Container>
);

export default PremierEvents;
