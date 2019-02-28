import styled from "styled-components";
import moment from "moment";
import Link from "next/link";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import SectionHeading from "../../components/styled/SectionHeading";
import WarningPressAccess from "../../components/WarningPressAccess";

import releaseList from "../../content/press-releases";

const Container = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 6em 10px;
`;

const StyledList = styled.ul`
  margin: 3em 0 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  &:not(:last-of-type) {
    border-bottom: 8px dotted ${props => props.theme.black};
  }
  span.title {
    color: ${props => props.theme.white};
    font-size: 1.4em;
    margin-left: 1.5em;
    transition: color 0.15s;
  }
  span.date {
    color: ${props => props.theme.white};
  }

  div.date-block {
    border: 2px solid ${props => props.theme.aqua};
    border-radius: 2px;
    color: ${props => props.theme.aqua};
    display: inline-block;
    text-align: center;
    span.month {
      background: ${props => props.theme.aqua};
      color: ${props => props.theme.deepAbyss};
      display: block;
      font-size: 0.6em;
      font-weight: 600;
      letter-spacing: 0.08em;
      padding: 0 1em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    span.day {
      font-family: ${props => props.theme.plex};
      font-size: 2em;
      font-style: italic;
      font-variant-numeric: slashed-zero;
      line-height: 1.5;
    }
  }

  a {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 2em 0;
    &:focus {
      outline: none;
      span.title {
        background: ${props => props.theme.sapphire};
        border-radius: 1px;
        box-shadow: 0 0 0 3px ${props => props.theme.sapphire};
        color: ${props => props.theme.midnight};
      }
    }
  }
`;

const Release = ({ title, date, path }) => (
  <StyledListItem>
    <Link href={`/press/${path}`}>
      <a>
        <div className="date-block">
          <span className="month">
            {moment(date, moment.ISO_8601).format("MMM YYYY")}
          </span>
          <span className="day">
            {moment(date, moment.ISO_8601).format("DD")}
          </span>
        </div>
        <span className="title">{title}</span>
      </a>
    </Link>
  </StyledListItem>
);

const PressReleaseList = props => {
  return (
    <BasicLayout>
      <Directive>Vital Mission Information</Directive>
      <Container>
        <SectionHeading text="Media Advisories" echo="media" />
        <WarningPressAccess />
        <StyledList>
          {props.releases.map(item => (
            <Release {...item} key={item.path} />
          ))}
        </StyledList>
      </Container>
    </BasicLayout>
  );
};

PressReleaseList.getInitialProps = async ({ req }) => {
  const releases = [...releaseList].reverse();
  return { releases };
};

export default PressReleaseList;
