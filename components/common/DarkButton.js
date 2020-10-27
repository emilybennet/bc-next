import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./Button";

const DarkButton = styled(Button)`
  background: ${props => props.theme.abyss};
  color: ${props => props.theme.white};
  transition: background 0.15s;
  &:hover {
    background: ${props => props.theme.black};
  }
`;

DarkButton.propTypes = {
  /**
   * Text or markup to render
   */
  children: PropTypes.node.isRequired,
  /**
   * URL to open
   */
  href: PropTypes.string.isRequired,
  /**
   * Where to open the URL
   */
  target: PropTypes.string,
  /**
   * Disable button functionality
   */
  disabled: PropTypes.bool,
  /**
   * Optional style class
   */
  className: PropTypes.string,
  /**
   * Optional CSS styles to apply
   */
  style: PropTypes.string,
}

export default DarkButton;
