import React from "react";
import styled from "styled-components";
import DistanceIcon from "../../static/images/icons/wayfinding-hollow.svg";

const ItemContainer = styled.div`
  align-items: center;
  border-bottom: 8px dotted ${props => props.theme.black};
  display: flex;
  flex-direction: row;
  padding: 30px 0;
  &:last-child {
    border-bottom-width: 0;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const ItemName = styled.span`
  display: block;
  font-size: 1.44em;
  font-weight: 600;
  letter-spacing: 2px;
`;

const ItemLoc = styled.span`
  color: ${props => props.theme.turquoise};
  display: block;
  letter-spacing: 1.5px;
`;

const ItemMetricsContainer = styled.div`
  align-items: flex-end;
  border-radius: 6px;
  background: ${props => props.theme.abyss};
  display: flex;
  flex-direction: row;
  margin: 10px 0 10px auto;
`;

const ItemMetric = styled.div`
  border-right: 1px solid ${props => props.theme.turquoise};
  padding: 10px 20px 12px;
  text-align: center;
  &:last-child {
    border-right-width: 0;
  }
  label {
    color: white;
    display: block;
    font-size: 0.65em;
    font-weight: 700;
    letter-spacing: 1.33px;
    text-transform: uppercase;
    white-space: nowrap;
  }
  span {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.plex};
    font-size: 1.77em;
    font-style: italic;
  }
  path {
    fill: ${props => props.theme.aqua};
    width: 64px;
  }
`;

const Poi = (
  { name, address, phone, url, urlSpecial, price, distance, walkTime, hash },
  ...props
) => (
  <ItemContainer>
    <div id={hash}>
      <ItemName>{name}</ItemName>
      <ItemLoc>
        {address} // {phone}
      </ItemLoc>
    </div>
    <ItemMetricsContainer>
      <ItemMetric as="a" href={urlSpecial} target="_blank">
        <span>${price}</span>
        <label>Book Now ></label>
      </ItemMetric>
      <ItemMetric>
        <DistanceIcon />
        <label>{distance} KM</label>
      </ItemMetric>
    </ItemMetricsContainer>
  </ItemContainer>
);

const PoiList = props => (
  <div>
    {props.data.map(item => (
      <Poi {...item} key={item.id} />
    ))}
  </div>
);

export default PoiList;
