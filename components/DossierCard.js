import React from "react";
import styled from "styled-components";
import Link from "next/link";
import DossierPhoto from "./DossierPhoto";

const Container = styled.article`
  display: block;
  text-align: center;
`;

const GuestName = styled.div`
  font-size: 1em;
  color: ${props => props.theme.gold};
  font-weight: 500;
  background: ${props => props.theme.black};
  padding: .25em 1em;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  transform: rotate(2deg);
  top: -1em;
`;

const DossierCard = props => (
  <Container>
    <DossierPhoto style={{ width: '100%', height: '250px' }} srcPath={props.photo} {...props} />
    { props.name && <GuestName>{props.name}</GuestName>}
  </Container>
);

export default DossierCard;