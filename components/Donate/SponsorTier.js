import React from "react";
import styled from "styled-components";

import ProgressRing from "./ProgressRing";
import Button from "../common/Button";
import IconStar from "../../static/images/icons/star.svg";

const Tier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Price = styled.span`
  display: block;
  font-family: ${props => props.theme.plex};
  font-size: 2.2em;
  font-variant-numeric: slashed-zero;
  font-style: italic;
  font-weight: 300;
  text-align: center;
`;

const ButtonWrap = styled(Button)`
  width: 100%;
  max-width: 70vw;
`;

const AxWrap = styled.div`
  color: ${props => props.theme.aqua};
  display: block;
  font-family: ${props => props.theme.poppins};
  font-size: 0.77em;
  letter-spacing: 1px;
  margin: 3.3em 0;
  text-align: center;
  text-transform: uppercase;
  span {
    display: block;
  }
`;

const Note = styled.div`
  display: block;
  font-family: ${props => props.theme.poppins};
  font-size: 0.77em;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
`;

const SponsorCard = ({ Icon, ...props }) => {
  const injectStars = () => {
    let stars = [];

    for (let index = 0; index < props.axLevel; index++) {
      stars.push(<IconStar fill="#39FFF6" key={stars.length} />);
    }
    for (let index = props.axLevel; index < 4; index++) {
      stars.push(<IconStar fill="#071318" key={stars.length} />);
    }

    return stars;
  };
  return (
    <Tier>
      <ProgressRing
        radius={100}
        stroke={6}
        progress={props.percent}
        barColor={props.color}
        Icon={Icon}
        countdown={true}
        message="Sold Out"
      />
      <Price>${props.price}</Price>
      <ButtonWrap href={props.url} disabled={!props.percent > 0}>
        {props.name}
      </ButtonWrap>

      <AxWrap>
        <span>A.X. Upgrades</span>
        {injectStars()}
      </AxWrap>
      <Note>{props.note}</Note>
    </Tier>
  );
};

export default SponsorCard;
