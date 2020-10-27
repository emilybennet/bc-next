import styled from "styled-components";
import PropTypes from "prop-types";
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

HollowButton.propTypes = {
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

export default HollowButton;
