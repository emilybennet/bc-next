import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2em 2em;
  text-align: center;
  @media (min-width: 700px) {
    &:not(:last-child) {
      border-right: 8px dotted ${props => props.theme.abyss};
    }
  }
`;

const Hook = styled.span`
  color: white;
  display: block;
  font-family: ${props => props.theme.poppins};
  font-size: 1em;
  font-weight: 400;
  margin-bottom: -10px;
  text-transform: uppercase;
`;

const Price = styled.span`
  color: ${props => props.theme.gold};
  display: block;
  font-family: ${props => props.theme.plex};
  font-size: 5.5em;
  font-style: italic;
  font-variant-numeric: slashed-zero;
  font-weight: 300;
  line-height: 1.6;
`;

const Button = styled.a`
  background: ${props => props.theme.aqua};
  border-radius: 3px;
  color: ${props => props.theme.midnight};
  cursor: pointer;
  display: block;
  font-family: ${props => props.theme.poppins};
  font-size: 0.88em;
  font-weight: 600;
  letter-spacing: 3.2px;
  line-height: 1;
  padding: 0.88em;
  text-transform: uppercase;
  transition: background 0.15s;
  &:hover {
    background: ${props => props.theme.turquoise};
  }
`;

const Description = styled.p`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.poppins};
  font-size: 0.77em;
  line-height: 1.6;
`;

const RegisterCard = props => (
  <Container className="register-card">
    <Hook>{props.lead}</Hook>
    <Price>${props.price}</Price>
    <Button href={props.url} target="_blank">
      Go: {props.name}
    </Button>
    <Description>{props.description}</Description>
  </Container>
);

export default RegisterCard;
