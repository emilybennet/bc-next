import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Map from "../static/images/footer-usa.svg";
import IconFacebook from "../static/images/icons/social-facebook.svg";
import IconSoundCloud from "../static/images/icons/social-soundcloud.svg";
import IconTwitter from "../static/images/icons/social-twitter.svg";
import IconYouTube from "../static/images/icons/social-youtube.svg";

const Container = styled.footer`
  align-items: center;
  border-top: 4px solid ${props => props.theme.abyss};
  display: grid;
  grid-template-columns: ${props => props.theme.gridColumns};
  grid-gap: ${props => props.theme.gridGap};
  margin: 3em auto;
  max-width: ${props => props.theme.maxWidth};
  padding-top: 3em;
`;

const MapWrap = styled.div`
  grid-column: 1 / span 5;
  background: transparent;
  svg {
    width: 100%;
  }
`;

const LegalWrap = styled.div`
  grid-column: 6 / span 7;
  padding: 0 20px;
`;

const Coordinates = styled.span`
  display: block;
  font-family: ${props => props.theme.plex};
  font-size: 1.33em;
  letter-spacing: 1.3px;
  line-height: 1;
  margin-bottom: 1.25em;
`;

const Legalese = styled.p`
  font-family: ${props => props.theme.plex};
  font-size: 0.7em;
  line-height: 1.5;
  margin-bottom: 1.6em;
`;

const FooterLinks = styled.div`
  font-family: ${props => props.theme.plex};
  font-size: 0.7em;
  line-height: 1.5;
  margin-bottom: 1.6em;
  a {
    color: ${props => props.theme.aqua};
    &:hover {
      color: ${props => props.theme.turquoise};
    }
    &:not(:first-child) {
      margin-left: 1em;
    }
  }
`;

const Heart = styled.span`
  color: ${props => props.theme.ruby};
  font-size: 1.25em;
`;

const SocialLinks = styled.div`
  display: block;
  a:not(:last-child) {
    margin-right: 20px;
  }
  path {
    fill: ${props => props.theme.aqua};
    transition: fill .15s;
  }
  a:hover {
    path {
      fill ${props => props.theme.turquoise};
    }
  }
`;

const SocialLink = ({ service, icon, url }) => (
  <a href={url} title={`Follow us on ${service}`} target="_blank">
    {icon}
  </a>
);

const SOCIAL_LINK_CONTENT = [
  {
    service: "Twitter",
    icon: <IconTwitter />,
    url: "https://twitter.com/bronycon"
  },
  {
    service: "Facebook",
    icon: <IconFacebook />,
    url: "https://www.facebook.com/BronyCon/"
  },
  {
    service: "SoundCloud",
    icon: <IconSoundCloud />,
    url: "https://soundcloud.com/bronycon"
  },
  {
    service: "YouTube",
    icon: <IconYouTube />,
    url: "https://www.youtube.com/bronycon"
  }
];

const Footer = props => (
  <Container>
    <MapWrap>
      <Map />
    </MapWrap>
    <LegalWrap>
      <Coordinates>
        39°17’10”N <Heart>♥</Heart> 76°36’56"W
      </Coordinates>
      <FooterLinks>
        <Link href="/">
          <a>Attend</a>
        </Link>
        <Link href="/exhibit">
          <a>Exhibit</a>
        </Link>
        <Link href="/about">
          <a>Organization</a>
        </Link>
        <Link href="/policies">
          <a>Policies</a>
        </Link>
      </FooterLinks>
      <Legalese>
        © {new Date().getFullYear()} BronyCon. BronyCon and BronyPalooza are a
        registered trademark of Lunar Solis Corp. My Little Pony: Friendship is
        Magic and related media belong exclusively to Hasbro, Inc. and Studio
        B/DHX Media Ltd.
      </Legalese>
      <SocialLinks>
        {SOCIAL_LINK_CONTENT.map(link => (
          <SocialLink {...link} key={link.service} />
        ))}
      </SocialLinks>
    </LegalWrap>
  </Container>
);

export default Footer;
