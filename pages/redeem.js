import React from "react";
import styled from "styled-components";

import BasicLayout from "../components/common/BasicLayout";
import Directive from "../components/common/Directive";
import SectionHeading from "../components/common/SectionHeading";

const RedeemLayout = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding-bottom: 8em;

  form {
    display: flex;
    justify-content: center;
  }

  input[type="text"] {
    background: ${props => props.theme.black};
    border: 2px solid ${props => props.theme.aqua};
    color: ${props => props.theme.aqua};
    font-family: ${props => props.theme.plex};
    font-size: 1.5em;
    outline: none;
    padding: 0.3em 0.5em;
    &:focus {
      border-color: ${props => props.theme.turquoise};
    }
  }

  input[type="submit"] {
    background: ${props => props.theme.aqua};
    border: none;
    color: ${props => props.theme.deepAbyss};
    cursor: pointer;
    font-size: 1.2em;
    font-size: 0.88em;
    font-weight: 600;
    letter-spacing: 3.2px;
    outline: none;
    padding: 0.88em;
    text-transform: uppercase;
    transition: background-color 0.15s;
    &:hover,
    &:focus {
      background: ${props => props.theme.turquoise};
    }
  }
`;

const LeadParagraph = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  max-width: ${props => props.theme.maxWidth};
  margin: 2em auto 3em;
  text-align: center;
  @media (max-width: ${props => props.theme.maxWidth}) {
    padding: 0 20px;
  }
`;

const RedeemPage = () => (
  <BasicLayout>
    <Directive>Access Code Required</Directive>
    <RedeemLayout>
      {/* <SectionHeading text="Redeem Passcode" /> */}
      <LeadParagraph>
        Unlock your discounted BronyCon badge by entering your code below. After
        submitting your code you'll be taken to Eventbrite, our online
        registration system, to complete the checkout process.
      </LeadParagraph>
      <form method="get" action="https://bronycon2019.eventbrite.com#tickets">
        <input type="text" name="discount" id="discount" required />
        <input type="submit" value="Redeem Code" />
      </form>
    </RedeemLayout>
  </BasicLayout>
);

export default RedeemPage;
