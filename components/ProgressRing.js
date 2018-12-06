import React, { Component } from "react";
import styled from "styled-components";

const StyledCircle = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const StatusText = styled.span`
  font-size: 2.2em;
  color: white;
  font-family: ${props => props.theme.plex};
  font-size: 2.2em;
  font-variant-numeric: slashed-zero;
  font-weight: 300;
  text-align: center;
`;

class ProgressRing extends Component {
  constructor(props) {
    super(props);

    const { radius, stroke, barColor, Icon } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, barColor, Icon, progress } = this.props;

    const gridCenterStyles = { gridRow: 1, gridColumn: 1 };

    let strokeDashoffset =
      this.circumference - (progress / 100) * this.circumference;

    if (this.props.countdown === true) strokeDashoffset = strokeDashoffset * -1;

    let statusText, symbolColor;
    if (this.props.progress > 0) {
      statusText = false;
      symbolColor = this.props.barColor;
    } else {
      statusText = (
        <StatusText style={gridCenterStyles}>{this.props.message}</StatusText>
      );
      symbolColor = "rgba(255,255,255,.05)";
    }

    return (
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <svg
          className=""
          height={radius * 2}
          width={radius * 2}
          style={gridCenterStyles}
        >
          <circle
            stroke="rgba(255,255,255,.05)"
            fill="transparent"
            strokeWidth={stroke}
            r={this.normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <StyledCircle
            stroke={barColor}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={this.circumference + " " + this.circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={this.normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <Icon fill={symbolColor} style={gridCenterStyles} />
        {statusText}
      </div>
    );
  }
}

export default ProgressRing;
