import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";
import SectionHeading from "../common/SectionHeading";
import WarningPressAccess from "./WarningPressAccess";

const ContentWrap = styled.article`
  margin: 5em auto;
  max-width: ${props => props.theme.maxWidth};
`;

const MetaBox = styled.aside`
  border-top: 8px dotted ${props => props.theme.abyss};
  border-bottom: 8px dotted ${props => props.theme.abyss};
  display: flex;
  font-size: 1.22em;
  flex-direction: row;
  margin-bottom: 2em;
  padding: 1em 0;
  section {
    flex: 1;
  }
  a {
    color: white;
    text-decoration: underline;
    text-decoration-style: dotted;
    &:focus {
      outline: none;
      background: ${props => props.theme.sapphire};
      border-radius: 1px;
      box-shadow: 0 0 0 3px ${props => props.theme.sapphire};
      color: ${props => props.theme.midnight};
    }
  }
`;

const SignOff = styled.p`
  color: ${props => props.theme.aqua};
  font-family: ${props => props.theme.poppins};
  font-weight: 700;
  font-size: 6em;
  letter-spacing: 3px;
  line-height: 1;
  opacity: 0.05;
  position: relative;
  text-align: center;
  user-select: none;
  z-index: 1;
`;

const StyledH1 = styled.h1`
  color: ${props => props.theme.aqua};
  font-size: 2.14em;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.gold};
  font-size: 1.4em;
  letter-spacing: 1px;
  margin-top: 2em;
  text-transform: uppercase;
`;

const Anchor = styled.a`
  color: ${props => props.theme.gold};
  text-decoration: underline;
  &:focus {
    outline: none;
    background: ${props => props.theme.sapphire};
    border-radius: 1px;
    box-shadow: 0 0 0 3px ${props => props.theme.sapphire};
    color: ${props => props.theme.midnight};
  }
`;

const MetaLabel = styled.label`
  color: ${props => props.theme.gold};
  display: inline-block;
  font-family: ${props => props.theme.plex};
  font-size: 0.6em;
  letter-spacing: 0.08em;
  margin-right: 1em;
  text-transform: uppercase;
`;

const DontRender = () => false;

const PressReleaseLayout = ({ Content, meta, ...props }) => (
  <BasicLayout>
    <Directive>For Immediate Dissemination</Directive>
    <ContentWrap>
      {/* <SectionHeading text="Media Release" /> */}
      <Content
        components={{
          h1: StyledH1,
          h2: DontRender,
          a: DontRender,
          p: DontRender
        }}
      />
      <MetaBox>
        <section>
          <MetaLabel>Publication Date</MetaLabel>
          {meta.pubDate}
        </section>
        <section>
          <MetaLabel>Media Contact</MetaLabel>
          <a href={`mailto:${meta.contact.email}`}>{meta.contact.name}</a>
        </section>
      </MetaBox>
      <Content
        components={{
          h1: DontRender,
          h2: StyledH2,
          a: Anchor
        }}
      />
      <SignOff>-&#8202;30&thinsp;-</SignOff>
      {/* <WarningPressAccess /> */}
    </ContentWrap>
  </BasicLayout>
);

export default PressReleaseLayout;
