import styled from "styled-components";
import slugify from "slugify";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import SectionHeading from "../../components/styled/SectionHeading";
import PolicyView from "../../components/PolicyView";

import Content from "../../content/policy_press.mdx";

const slugifySettings = {
  replacement: "-",
  lower: true,
  remove: /[*+~.()'"!?:@]/g
};

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

const H1 = props => {
  const hash = slugify(props.children, slugifySettings);
  return (
    <StyledH1 id={hash} {...props}>
      <a href={`#${hash}`}>{props.children}</a>
    </StyledH1>
  );
};

const H2 = props => {
  const hash = slugify(props.children, slugifySettings);
  return (
    <StyledH2 id={hash} {...props}>
      <a href={`#${hash}`}>{props.children}</a>
    </StyledH2>
  );
};

const Container = styled.div`
  margin: 5em 0;
`;

const PressPolicies = props => (
  <BasicLayout pageTitle="Press Policy">
    <Directive>Official Protocol</Directive>
    <Container>
      <SectionHeading text="policies" />
      <PolicyView>
        <Content
          components={{ h1: H1, h2: H2, a: Anchor, blockquote: Blockquote }}
        />
      </PolicyView>
    </Container>
  </BasicLayout>
);

export default PressPolicies;
