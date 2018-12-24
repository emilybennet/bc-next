import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import Head from "next/head";

import FestiveFrame from "../components/HolidayLightFrame";
import CardMsg1 from "../static/images/holiday2018/inside-message-part1.svg";
import CardMsg2 from "../static/images/holiday2018/inside-message-part2.svg";
import CardMsg3 from "../static/images/holiday2018/inside-message-part3.svg";
import CardDivider from "../static/images/holiday2018/inside-divider.svg";
import SigShir from "../static/images/holiday2018/signature-shir.svg";
import SigEliana from "../static/images/holiday2018/signature-eliana.svg";
import SigEric from "../static/images/holiday2018/signature-eric.svg";
import Logo from "../static/images/bronycon-logo.svg";

const GlobalOverwrite = createGlobalStyle`
  html,
  body {
    background-color: white !important;
    color: #C2343E !important;
  }
`;

const CardCover = styled.div`
  align-items: center;
  background: url("/static/images/holiday2018/cover-bg-wood.jpg") #2a2745
    no-repeat center center;
  background-size: cover;
  box-shadow: 0 0.25em 1em rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  justify-items: center;
  overflow: hidden;
  position: relative;
  width: 100vw;
  z-index: 100;
  img,
  svg {
    grid-column: 1;
    grid-row: 1;
    max-width: 90%;
  }
  svg {
    height: 90vh;
  }
`;

const CardContent = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 100px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 0;
  svg {
    max-width: 100%;
  }
  .message-row {
    /* align-items: center;
    display: flex; */
    svg {
      margin-bottom: 5em;
      min-width: 100%;
    }
    svg:nth-child(2) {
      display: none;
    }

    @media (min-width: 650px) {
      align-items: center;
      display: flex;
      svg {
        min-width: auto;
      }
      svg:nth-child(2) {
        display: block;
        margin: 0 20px;
      }
    }
  }
  .signatures {
    margin: 5em 0;
    width: 100%;

    .signature {
      margin-bottom: 1em;
      svg,
      span {
        display: block;
      }
      span {
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      span.name {
        font-weight: 700;
      }
    }

    @media (min-width: 550px) {
      align-items: flex-end;
      display: grid;
      grid-gap: 1em;
      grid-template-columns: repeat(3, 1fr);
      width: initial;

      .signature {
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      svg {
        width: 100%;
      }
    }
  }

  .legalese {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 0.6em;
    svg {
      fill: #c2343e;
      width: 200px;
    }
  }
`;

const ScreenReaderOnly = styled.div`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

class HolidayPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.cardBody = React.createRef();
    this.cardWrap = React.createRef();

    this.bulbTimeout = null;
    this.bulbOffset = 0;
  }

  componentDidMount() {
    this.setWrapHeight();
    this.setupBulbs();

    window.addEventListener("resize", this.setWrapHeight);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setWrapHeight);
    window.removeEventListener("scroll", this.handleScroll);

    clearTimeout(this.bulbTimeout);
  }

  setWrapHeight = () => {
    console.log(this.cardBody.current.clientHeight);
    this.cardWrap.current.style.height = `${this.cardBody.current.clientHeight +
      window.innerHeight}px`;
  };

  handleScroll = () => {
    if (document.scrollingElement.scrollTop > window.innerHeight) {
      this.cardBody.current.style.position = "relative";
    } else {
      this.cardBody.current.style.position = "fixed";
    }
  };

  setupBulbs = () => {
    this.bulbs = document.querySelectorAll(".bulbGroup rect");
    this.bulbOffset = this.bulbOffset === 0 ? 1 : 0;

    const bulbColors = [
      "#CF3B36", // red
      "#159865", // green
      "#F6DF72", // yellow
      "#ABACAB" // grey
    ];

    for (let i = 0; i < this.bulbs.length; i++) {
      const colorIndex = (i + 1 + this.bulbOffset) % bulbColors.length;
      this.bulbs[i].style.fill = bulbColors[colorIndex];
    }

    this.bulbTimeout = setTimeout(this.setupBulbs, 1000);
  };

  render() {
    return (
      <div ref={this.cardWrap}>
        <Head>
          <title>A holiday message from our Chairs • BronyCon</title>
          <meta
            name="description"
            content="Greetings from your friends at BronyCon!"
          />
          <meta
            property="og:title"
            content="Greetings from your friends at BronyCon!"
          />
          <meta
            property="og:description"
            content="We are thinking of you this holiday season as we prepare for our final, biggest and best year ever!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bronycon.org/holiday" />
          <meta
            property="og:image"
            content="http://bronycon.org/static/images/opengraph-holiday2018.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bronycon" />
          <meta name="twitter:creator" content="@bronycon" />
          <meta
            name="twitter:title"
            content="Greetings from your friends at BronyCon!"
          />
          <meta
            name="twitter:description"
            content="We are thinking of you this holiday season as we prepare for our final, biggest and best year ever!"
          />
          <meta
            name="twitter:image:src"
            content="https://bronycon.org/static/images/opengraph-holiday2018.jpg"
          />
        </Head>
        <GlobalOverwrite />
        <CardCover>
          <img
            src="/static/images/holiday2018/cover-fg-cozy-scene.png"
            alt="BronyCon Mascots"
          />
          <FestiveFrame />
        </CardCover>

        <CardContent ref={this.cardBody}>
          <div className="message-row">
            <CardMsg1 aria-hidden="true" />
            <CardDivider aria-hidden="true" />
            <CardMsg2 aria-hidden="true" />
          </div>
          <CardMsg3 aria-hidden="true" />

          <ScreenReaderOnly>
            <p>
              Greetings from your friends at BronyCon! We are thinking of you
              this holiday season as we prepare for our final, biggest & best
              year ever!
            </p>

            <p>
              Thank you for all of your support! We couldn't have done it
              without you. May you holidays be filled with laughter, kindness,
              and magic!
            </p>
          </ScreenReaderOnly>

          <div className="signatures">
            <div className="signature">
              <SigShir />
              <span className="name">Shir Goldberg</span>
              <span className="title">Chair</span>
            </div>

            <div className="signature">
              <SigEliana />
              <span className="name">Eliana Summers</span>
              <span className="title">Vice Chair</span>
            </div>

            <div className="signature">
              <SigEric />
              <span className="name">Eric Houston</span>
              <span className="title">Special Projects</span>
            </div>
          </div>

          <div className="legalese">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <p>
              Artwork by Shana De Laere (Pepooni). Typography by Brandi St.
              Andrew.
              <br />© 2018 BronyCon. BronyCon is a registered trademark of Lunar
              Solis Corp.
            </p>
          </div>
        </CardContent>
      </div>
    );
  }
}

export default HolidayPage;
