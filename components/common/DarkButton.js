import styled from "styled-components";
import Button from "./Button";

const DarkButton = styled(Button)`
  background: ${props => props.theme.abyss};
  color: ${props => props.theme.white};
  transition: background 0.15s;
  &:hover {
    background: ${props => props.theme.black};
  }
`;

export default DarkButton;
