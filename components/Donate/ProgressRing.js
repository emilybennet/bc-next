import React from "react";
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

const ProgressRing = ({
  radius,
  stroke,
  progress,
  barColor,
  Icon,
  countdown,
  message
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const gridCenterStyles = { gridRow: 1, gridColumn: 1 };

  let strokeDashoffset = circumference - (progress / 100) * circumference;
  if (countdown === true) strokeDashoffset = strokeDashoffset * -1;

  const symbolColor = progress > 0 ? barColor : "rgba(255,255,255,.05)";
  const statusText =
    progress > 0 ? (
      ""
    ) : (
      <StatusText style={gridCenterStyles}>{message}</StatusText>
    );

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
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <StyledCircle
          stroke={barColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <Icon fill={symbolColor} style={gridCenterStyles} />
      {statusText}
    </div>
  );
};

export default ProgressRing;
