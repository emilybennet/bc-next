import React from "react";
import styled from "styled-components";

const Name = styled.span`
  font-family: ${props => props.theme.poppins};
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Price = styled.span`
  color: ${props => props.theme.gold};
  font-family: ${props => props.theme.plex};
  font-size: 1.3em;
  font-style: italic;
  font-variant-numeric: slashed-zero;
  font-weight: 300;
  line-height: 1;
  margin-right: 10px;
`;

const Includes = styled.p`
  color: ${props => props.theme.aqua};
  font-family: ${props => props.theme.poppins};
  font-size: 0.77em;
  line-height: 2;
`;

const Package = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  text-align: center;
`;

const Details = styled.div`
  margin-top: auto;
`;

const Option = ({ name, price }) => (
  <p>
    <Price>${price}</Price> <Name>{name}</Name>
  </p>
);

const ExhibitorPackageCard = ({ Diagram, packages, includes }) => (
  <Package>
    {Diagram && <Diagram />}
    <Details>
      {packages.map(p => (
        <Option {...p} key={p.name} />
      ))}
      {includes.map((inc, i) => (
        <Includes key={i}>{inc}</Includes>
      ))}
    </Details>
  </Package>
);

export default ExhibitorPackageCard;
