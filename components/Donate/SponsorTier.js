import React from "react";
import PropTypes from "prop-types";
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

SponsorCard.propTypes = {
  /**
   * What is this tier called.
   */
  name: PropTypes.string.isRequired,
  /**
   * Imported SVG to represent badge tier.
   */
  Icon: PropTypes.element.isRequired,
  /**
   * Badge price, as a whole number (2000 for $2000.00).
   */
  price: PropTypes.number.isRequired,
  /**
   * Eventbrite URL to buy badge.
   */
  url: PropTypes.string.isRequired,
  /**
   * Hex color code of the progress ring.
   */
  color: PropTypes.string.isRequired,
  /**
   * Attendee eXperience level (e.g. Good, Better, Best), a number 0-4.
   */
  axLevel: PropTypes.number.isRequired,
  /**
   * Number of badges remaining, as a whole number percentage (42 for 42%).
   */
  percent: PropTypes.number.isRequired,
  /**
   * A optional short note about this tier.
   */
  note: PropTypes.string
}

export default SponsorCard;
