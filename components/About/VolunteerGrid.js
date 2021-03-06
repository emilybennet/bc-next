import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  padding: 4em 0 2em;
`;

const DeptCard = styled.a`
  border: 2px solid;
  border-radius: 2px;
  color: ${props => props.theme.turquoise};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5em 0.75em 0.4em;
  transition: color 0.15s;
  &:hover {
    color: ${props => props.theme.aqua};
  }
  @media (max-width: 666px) {
    justify-content: center;
  }
  &:focus {
    outline: none;
    color: ${props => props.theme.aqua};
    box-shadow: 0 0 0 1px ${props => props.theme.midnight},
      0 0 0 4px ${props => props.theme.sapphire};
  }
`;

const DeptName = styled.h3`
  display: block;
  margin: 0;
  &:after {
    content: "→";
    font-weight: normal;
    margin-left: 5px;
  }
`;

const DeptDesc = styled.p`
  margin: 0;
`;

const Anchor = styled.a`
  color: ${props => props.theme.aqua};
  text-decoration: underline;
  transition: color 0.15s;
  &:hover {
    color: ${props => props.theme.turquoise};
  }
`;

const H3 = styled.h3`
  color: ${props => props.theme.gold};
  font-size: 1.5em;
`;

const Opening = ({ dept, description, url }) => (
  <DeptCard href={url} target="_blank">
    <DeptName>{dept}</DeptName>
    <DeptDesc>{description}</DeptDesc>
  </DeptCard>
);

const APP_CONTENT = [
  {
    dept: "Events",
    description: "Coordinates scheduled sessions.",
    url: "http://bit.ly/2zEZgsC"
  },
  {
    dept: "Finance",
    description: "Work with money. Cash counting skills required.",
    url: "http://bit.ly/2TTg87u"
  },
  {
    dept: "Marketplace",
    description: "Assist exhibitors and sell swag.",
    url: "http://bit.ly/2zsW1V4"
  },
  {
    dept: "Operations",
    description: "Core logistics, radios, and the Lost & Found.",
    url: "http://bit.ly/2PYWHMh"
  },
  {
    dept: "Photography",
    description: "Say cheese and document everything.",
    url: "http://bit.ly/2QqsQMm"
  },
  {
    dept: "Public Relations",
    description: "Help attendees and press. Pre-event roles available.",
    url: "http://bit.ly/2Rkdzts"
  },
  // {
  //   dept: "Registration",
  //   description: "Make first impressions while handing out badges.",
  //   url: "http://bit.ly/2SiodBf"
  // },
  {
    dept: "Security",
    description: "Guide attendees and maintain order. Medical roles available.",
    url: "http://bit.ly/2FMK1Ua"
  },
  {
    dept: "Staff Suite",
    description: "Provide a little internal hospitality.",
    url: "http://bit.ly/2E2WDVA"
  }
  // {
  //   dept: "VIP Relations",
  //   description: "Shape the VIP Guest experience.",
  //   url: "http://bit.ly/2E2997z"
  // }
  // {
  //   dept: "General Staff",
  //   description: "Not sure where you fit in? We'll figure that out :)",
  //   url: "http://bit.ly/2E3b6Rr"
  // }
];

const VolunteerGrid = props => (
  <div>
    <Container>
      {APP_CONTENT.map(app => (
        <Opening {...app} key={app.dept} />
      ))}
    </Container>
    <H3>Contribute Without Commitment</H3>
    <p>
      Attendees looking to only earn back the purchase value of their standard
      4-Day badge in exchange for unskilled manual labor are welcome to{" "}
      <Anchor href="https://goo.gl/forms/D3N4OlpQiKoubkPq1" target="_blank">
        apply to our Gopher program.
      </Anchor>
    </p>
  </div>
);

export default VolunteerGrid;
