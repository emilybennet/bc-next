import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  background: ${props => props.theme.abyss};
  border-radius: 3px;
  overflow: hidden;
  line-height: 0;
`;

const DossierImage = styled.img`
  filter: contrast(0.85) url(#lcd_duotone);
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const basePath = process.env.basePath ? process.env.basePath : "";

const DossierPhoto = props => (
  <Container>
    <DossierImage
      src={
        `${basePath + props.srcPath}` ||
        `${basePath}/static/images/guests/unknown.png`
      }
      {...props}
    />
  </Container>
);

export default DossierPhoto;
