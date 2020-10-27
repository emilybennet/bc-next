import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

const StyledAnchor = styled.a`
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
  text-align: center;
  text-transform: uppercase;
  transition: background 0.15s;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${props => props.theme.midnight},
      0 0 0 4px ${props => props.theme.sapphire};
  }
  &:hover {
    background: ${props => props.theme.turquoise};
  }
  &.disabled {
    background: ${props => props.theme.abyss};
    color: ${props => props.theme.aqua};
    cursor: default;
    text-decoration: line-through;
    user-select: none;
    &:focus {
      box-shadow: 0 0 0 1px ${props => props.theme.midnight},
        0 0 0 4px ${props => props.theme.ruby};
    }
  }
`;

const Button = ({ href, target, className, disabled, style, ...props }) => {
  if (disabled) {
    className = `${className} disabled`;
    href = "";
  }
  if (href.startsWith("http")) {
    return (
      <StyledAnchor
        href={href}
        target={target}
        className={className}
        style={style}
      >
        {props.children}
      </StyledAnchor>
    );
  }
  return (
    <Link href={href} passHref>
      <StyledAnchor target={target} className={className} style={style}>
        {props.children}
      </StyledAnchor>
    </Link>
  );
};

Button.propTypes = {
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

export default Button;
