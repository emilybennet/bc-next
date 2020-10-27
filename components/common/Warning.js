import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

const WarningContainer = styled.div`
  border: 1px solid ${props => props.theme.aqua};
  background: rgba(31, 179, 172, 0.2);
  color: ${props => props.theme.aqua};
  font-family: ${props => props.theme.plex};
  font-size: 0.8em;
  margin: 0 -20px;
  padding: 20px;
`;

const Anchor = styled.a`
  color: ${props => props.theme.gold};
  display: inline-block;
  transition: color .15s;
  &:hover {
    color ${props => props.theme.yellow};
  }
  &:not(:last-of-type) {
    margin-right: 2em;
  }
  &:focus {
    outline: none;
    background: ${props => props.theme.sapphire};
    border-radius: 1px;
    box-shadow: 0 0 0 3px ${props => props.theme.sapphire};
    color: ${props => props.theme.midnight};
  }
  span {
    text-decoration: underline;
  }
`;

const ActionLink = ({ text, url, ...props }) => (
  <Link href={url} passHref>
    <Anchor>
      {" "}
      > <span>{text}</span>
    </Anchor>
  </Link>
);

const Warning = ({ actions = [], ...props }) => {
  return (
    <WarningContainer>
      {props.children}{" "}
      {actions.map(a => (
        <ActionLink {...a} key={a.url} />
      ))}
    </WarningContainer>
  );
};

Warning.propTypes = {
  /**
   * Text or markup to render
   */
  children: PropTypes.node.isRequired,
  /**
   * Array of actions
   */
  actions: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
}

export default Warning;
