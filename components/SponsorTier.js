import React from "react";
import styled from "styled-components";

import SponsorIconGraph from "./SponsorIconGraph";
import Button from "./styled/Button";
import IconStar from "../static/images/icons/star.svg";

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
  margin: 3.3em 0;
  text-align: center;
  text-transform: uppercase;
`;

const SponsorCard = ({ Icon, ...props }) => {
  const injectStars = () => {
    let stars = [];

    for (let index = 0; index < props.axLevel; index++) {
      stars.push(<IconStar fill="#39FFF6" />);
    }
    for (let index = props.axLevel; index < 4; index++) {
      stars.push(<IconStar fill="#071318" />);
    }

    return stars;
  };
  return (
    <Tier>
      <SponsorIconGraph
        Icon={Icon}
        color={props.color}
        percent={props.percent}
      />
      <Price>${props.price}</Price>
      <ButtonWrap href={props.url}>{props.name}</ButtonWrap>

      <AxWrap>
        <span>A.X. Upgrades</span>
        {injectStars()}
      </AxWrap>
      <Note>{props.note}</Note>
    </Tier>
  );
};

export default SponsorCard;
