import styled from "styled-components";
import Button from "./Button";

const HollowButton = styled(Button)`
  background: transparent;
  border: 2px solid;
  color: ${props => props.theme.aqua};
  transition: color 0.15s;
  &:hover {
    background: transparent;
    color: ${props => props.theme.turquoise};
  }
`;

export default HollowButton;
