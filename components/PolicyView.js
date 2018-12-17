import React from "react";
import styled from "styled-components";
import slugify from "slugify";

import SectionHeading from "./styled/SectionHeading";
import PolicyNav from "./PolicyNav";

const slugifySettings = {
  replacement: "-",
  lower: true,
  remove: /[*+~.()'"!?:@]/g
};

//
//
// Layout styles
//
//

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

const Container = styled.div`
  margin: 5em 0;
`;

//
//
// Content styles
//
//

const StyledH1 = styled.h1`
  font-size: 2.14em;
  letter-spacing: 2px;
  text-transform: uppercase;
  a {
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledH2 = styled.h2`
  font-size: 1.4em;
  letter-spacing: 1px;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.gold};
    &:hover {
      text-decoration: underline;
    }
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

const Blockquote = styled.blockquote`
  color: ${props => props.theme.aqua};
  font-size: 1.14em;
  margin-left: 0;
`;

const Anchor = styled.a`
  color: ${props => props.theme.gold};
  text-decoration: underline;
`;

const ContentHeading = ({ Component, ...props }) => {
  const hash = slugify(props.children, slugifySettings);
  return (
    <Component id={hash} {...props}>
      <a href={`#${hash}`}>{props.children}</a>
    </Component>
  );
};

const H1 = ({ children }) => (
  <ContentHeading Component={StyledH1}>{children}</ContentHeading>
);

const H2 = ({ children }) => (
  <ContentHeading Component={StyledH2}>{children}</ContentHeading>
);

const PolicyView = ({ Content, ...props }) => {
  return (
    <Container>
      <SectionHeading text="policies" />
      <PolicyLayout>
        <PolicyNav />
        <ContentWrap>
          <Content
            components={{ h1: H1, h2: H2, a: Anchor, blockquote: Blockquote }}
          />
        </ContentWrap>
      </PolicyLayout>
    </Container>
  );
};

export default PolicyView;
