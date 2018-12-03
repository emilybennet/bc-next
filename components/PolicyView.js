import React from "react";
import styled from "styled-components";
import PolicyNav from "./PolicyNav";

const PolicyLayout = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: ${props => props.theme.gridGap};
  max-width: ${props => props.theme.maxWidth};
  margin: 4em auto;
  @media (max-width: ${props => props.theme.maxWidth}) {
    padding: 0 20px;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

const ContentWrap = styled.div`
  font-size: 0.8em;
`;

const MenuAnchor = styled.a`
  color: ${props => props.theme.aqua};
  &:hover {
    text-decoration: underline;
  }
`;

const PolicyView = props => {
  return (
    <PolicyLayout>
      <PolicyNav />
      <ContentWrap>{props.children}</ContentWrap>
    </PolicyLayout>
  );
};

export default PolicyView;
