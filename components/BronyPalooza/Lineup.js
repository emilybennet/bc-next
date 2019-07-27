import React from "react";
import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";

const Performer = styled.div`
  --w: 80vw;
  width: var(--w);
  height: 1vh;
  min-height: calc(.086 * var(--w));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  overflow: hidden;
  transition: all .5s cubic-bezier(0.165, 0.840, 0.440, 1.000);
  outline: none;
  position: relative;

  &:hover .performer-name-decorative {
    transform: perspective(500px) translateZ(-20px);
  }

  &:focus {
    height: calc(.172 * var(--w));
    background-size: 75%;
  }

  .image {
    width: var(--w);
    height: calc(.086 * var(--w));
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform .25s cubic-bezier(0.175, 0.885, 0.320, 1.275);
  }

  .performer-name-decorative {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-image: url(/static/images/bp-lineup-poster.svg#view-${props => props.slug});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    z-index: 0;
    text-indent: -8000px;
    overflow: hidden;
    transition: transform .25s cubic-bezier(0.175, 0.885, 0.320, 1.275);
    cursor: pointer;
  }

  .dymo {
    background: black;
    font-family: ${props => props.theme.plex};
    color: ${props => props.theme.gold};
    font-weight: 300;
    padding: .25em .75em;
    border-radius: 2px;
    box-shadow: 0 3px 0 rgba(0,0,0,.25);
    font-size: 20px;
    opacity: 0;
    z-index: 1;
    pointer-events: none;
    transition: opacity .25s;
  }

  input[type=radio] {
    display: none;
  }

  input[type=radio]:checked ~ .dymo {
    opacity: 1;
  }

  input[type=radio]:checked ~ .image {
    transform: perspective(500px) translateZ(-100px);
    opacity: .5;
  }

  @media (max-width: 800px) {
    --w: 100vw;
    min-height: auto;
    height: 4em;

    .dymo {
      font-size: 14px;
    }
  }
`;

const Lineup = ({ lineupList }) => (
  lineupList.map(item => (
    <Performer aria-label={`${item.name} ${item.setTime}`} key={item.slug} slug={item.slug}>
      <input type="radio" name="performer" id={`toggle-${item.slug}`} />
      <img class="image" title={item.name} src={`/static/images/bp-lineup-poster.svg#view-${item.slug}`} width="1500px" height="127px" />
      <label htmlFor={`toggle-${item.slug}`} class="performer-name-decorative">{item.name}</label>
      <span class="dymo">{item.name} — {item.setTime}</span>
    </Performer>
  ))
);

export default Lineup;
