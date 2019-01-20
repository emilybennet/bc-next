import React from "react";
import styled from "styled-components";

const WarningContainer = styled.div`
  border: 1px solid ${props => props.theme.aqua};
  background: rgba(31, 179, 172, 0.2);
  color: ${props => props.theme.aqua};
  font-family: ${props => props.theme.plex};
  font-size: 0.8em;
  margin: 0 -20px;
  padding: 20px;
`;

const Warning = props => (
  <WarningContainer>
    <p>
      <strong>Demand for discounted rooms is extremely high</strong>, book
      whatever days you can or try another hotel. Contact the hotel directly to
      extend your stay at the standard rate for any days you were unable to book
      at the discounted rate.
    </p>
    <p>
      <strong>Pre-registration pickup</strong> doesn't start until Thursday,
      August 1, so don't stress if you’re unable to get into town on Wednesday.
    </p>
  </WarningContainer>
);

export default Warning;
