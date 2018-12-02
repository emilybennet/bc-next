import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Directive from "../components/Directive";
import SectionHeading from "../components/styled/SectionHeading";
import VolunteerGrid from "../components/VolunteerGrid";

const Section = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 4em 0;
`;

const Inner = styled.div`
  padding: 0 1em;
`;

const AboutPage = props => (
  <React.Fragment>
    <Header />
    <Directive>Eyes Only Communiqué</Directive>
    <Section>
      <SectionHeading text="TL;DR" />
      <Inner>
        <p>
          BronyCon is the world’s largest convention for and by fans of the
          animated TV series "My Little Pony: Friendship is Magic." Starting out
          as a one-day event in New York City with just 100 attendees, BronyCon
          has grown over the years to a weekend-long extravaganza drawing over
          10,000 fans from every corner of the globe. Featuring show guests, an
          incredible panel lineup, BronyPalooza, a fully-stocked vendor hall,
          screenings, contests and so much more, BronyCon has something in store
          for everyone.
        </p>
        <p>BronyCon is a nonprofit event run entirely by volunteer staff.</p>
      </Inner>
    </Section>
    <Section>
      <SectionHeading text="Volunteer" />
      <Inner>
        <p>
          BronyCon is a passion project of 300+ dedicated volunteers striving
          towards creating the greatest weekend ever. Without their generous
          labor BronyCon simply wouldn't happen. As a thank you for working
          during the event, volunteer staff receive a complementary badge to the
          event, exclusive swag, possible snacks, and are eligible for deeply
          discounted shared staff-only housing.
        </p>
        <p>
          Departments currently recruiting for our 2019 event are listed below.
          Interested candidates must be 18 years or older and available July 31
          through August 5 to work on site in Baltimore, Maryland.
        </p>
        <VolunteerGrid />
      </Inner>
    </Section>
    <Footer />
  </React.Fragment>
);

export default AboutPage;
