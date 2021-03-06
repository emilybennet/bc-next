import React from "react";
import styled from "styled-components";
import Link from "next/link";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Configuration from "./ExhibitorPackageCard";

import SingleBooth from "../../static/images/vendor_hall-diagram-feet-single.svg";
import DoubleBooth from "../../static/images/vendor_hall-diagram-feet-double.svg";
import QuadBooth from "../../static/images/vendor_hall-diagram-feet-quad.svg";

const MarketplaceSection = styled.section`
  margin-bottom: 8em;
  text-align: center;
  &:first-of-type {
    margin-top: 4em;
  }
`;

const Lead = styled.p`
  font-size: 1.6em;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  text-align: center;
  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

const PolicyLink = styled.a`
  color: ${props => props.theme.gold};
  display: inline-block;
  font-size: 0.77em;
  letter-spacing: 1px;
  line-height: 2;
  padding: 1em 0;
  text-decoration: underline;
  &:not(:last-of-type) {
    margin-right: 1em;
  }
`;

const InlineButton = styled(Button)`
  display: inline-block;
`;

const CompareGridHeading = styled.h3`
  color: ${props => props.theme.aqua};
  font-family: ${props => props.theme.poppins};
  font-size: 1.11em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
`;

const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  margin: 2.77em auto;
  max-width: 1400px;
  > *:not(:last-child) {
    border-right: 8px dotted ${props => props.theme.abyss};
  }
  @media (max-width: 960px) {
    grid-template-columns: auto;
    > *:not(:last-child) {
      border-bottom: 8px dotted ${props => props.theme.abyss};
      border-right: none;
    }
  }
`;

const VENDOR_HALL_OPTIONS = [
  {
    config: "single",
    packages: [
      {
        name: "Single Basic Unit",
        price: 310
      },
      {
        name: "Single Corner Unit",
        price: 385
      }
    ],
    includes: ["2 Exhibitor Badges", "Basic Union Labor", "Electricity"],
    Diagram: SingleBooth
  },
  {
    config: "double",
    packages: [
      {
        name: "Inline Double Unit",
        price: 620
      },
      {
        name: "Endcap Double Unit",
        price: 770
      }
    ],
    includes: ["4 Exhibitor Badges", "Basic Union Labor", "Electricity"],
    Diagram: DoubleBooth
  },
  {
    config: "quad",
    packages: [
      {
        name: "Island Quad",
        price: 2140
      }
    ],
    includes: ["8 Exhibitor Badges", "Basic Union Labor", "Electricity"],
    Diagram: QuadBooth
  }
];

const ARTIST_ALLEY_OPTIONS = [
  {
    config: "single",
    packages: [
      {
        name: "Single Slot",
        price: 100
      }
    ],
    includes: ["Half of an 8' Table", "1 Exhibitor Badge"]
  },
  {
    config: "double",
    packages: [
      {
        name: "Double Slot",
        price: 175
      }
    ],
    includes: ["An Entire 8' Table", "2 Exhibitor Badges"]
  }
];

const ExhibitPage = props => (
  <BasicLayout pageTitle="Exhibit">
    <Directive>Apply For Exhibitor Clearance</Directive>

    <MarketplaceSection>
      <SectionHeading text="Vendor Hall" />
      <Lead>
        Traditional trade show booths with walls for commercial merchants,
        larger artists, and craftspeople.
      </Lead>
      <CompareGridHeading>Vendor Booth Sizes</CompareGridHeading>
      <CompareGrid>
        {VENDOR_HALL_OPTIONS.map(opt => (
          <Configuration {...opt} key={opt.config} />
        ))}
      </CompareGrid>
      {/* <InlineButton
        href="https://airtable.com/shr72SP1FNH3plLmn"
        target="_blank"
      >
        Apply For Vendor Hall
      </InlineButton> */}
      <InlineButton href="#" disabled={true}>
        Vendor Hall Application Closed
      </InlineButton>
      <div>
        <Link href="/policies/marketplace">
          <PolicyLink>Marketplace Policies</PolicyLink>
        </Link>
      </div>
    </MarketplaceSection>

    <MarketplaceSection>
      <SectionHeading text="Artist Alley" />
      <Lead>
        Half-table slots for individual artists who create and sell their own
        works of art or perform commissions.
      </Lead>
      <CompareGridHeading>Artist Alley Options</CompareGridHeading>
      <CompareGrid>
        {ARTIST_ALLEY_OPTIONS.map(opt => (
          <Configuration {...opt} key={opt.config} />
        ))}
      </CompareGrid>
      {/* <InlineButton href="https://airtable.com/shrm1UrM7he6zG6VG">
        Apply for Artist Alley
      </InlineButton> */}
      <InlineButton href="#" disabled={true}>
        Arist Alley Application Closed
      </InlineButton>
      <div>
        <Link href="/policies/marketplace">
          <PolicyLink>Marketplace Policies</PolicyLink>
        </Link>
      </div>
    </MarketplaceSection>

    <MarketplaceSection>
      <SectionHeading text="Art Show" id="artshow" />
      <Lead style={{ marginBottom: 20 }}>
        Submit one-of-a-kind artwork for attendees to bid on in a
        BronyCon-operated art gallery.
      </Lead>
      <InlineButton href="https://forms.gle/GhKiwihRTS4bttFr7">
        Submit to Art Show
      </InlineButton>
      <div>
        <Link href="/policies/artshow">
          <PolicyLink>Art Show Policies</PolicyLink>
        </Link>
      </div>
    </MarketplaceSection>
  </BasicLayout>
);

export default ExhibitPage;
