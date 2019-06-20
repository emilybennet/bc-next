import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.a`
  svg {
    margin-right: 10px;
    path {
      fill: ${props => props.theme.turquoise};
      transition: 0.15s;
    }
  }

  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  &:before {
    background: ${props => props.theme.turquoise};
    border-radius: 0 3px 3px 0;
    content: " ";
    display: inline-block;
    height: 3px;
    margin-right: 10px;
    transition: 0.15s;
    width: 22px;
  }

  &:hover {
    &:before {
      background: ${props => props.theme.aqua};
    }
    path {
      fill: ${props => props.theme.aqua};
    }
  }
`;

const LabelStyle = styled.span`
  background: ${props => props.theme.black};
  border-radius: 2px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.gold};
  display: inline-block;
  font-family: ${props => props.theme.plex};
  font-size: 0.88em;
  letter-spacing: 1px;
  line-height: 1;
  padding: 10px 14px;
`;

const MenuItem = ({ name, Icon = false, rotation = 0, ...props }) => (
  <StyledMenuItem {...props}>
    {Icon && <Icon />}
    <LabelStyle style={{ transform: `rotate(${rotation}deg)` }}>
      {name}
    </LabelStyle>
  </StyledMenuItem>
);

export default MenuItem;
