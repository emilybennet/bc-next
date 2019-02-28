import styled from "styled-components";
import slugify from "slugify";

const slugifySettings = {
  replacement: "-",
  lower: true,
  remove: /[*+~.()'"!?:@]/g
};

const StyledH2 = styled.h2`
  font-size: 2.7em;
  letter-spacing: 1px;
  line-height: 2.2em;
  margin: 0;
  position: relative;
  text-align: center;
  z-index: 2;
`;

const Echo = styled.span`
  font-size: 6em;
  letter-spacing: 3px;
  line-height: 1;
  height: 0;
  margin: 0;
  opacity: 0.05;
  position: relative;
  text-align: center;
  user-select: none;
  z-index: 1;
`;

const Container = styled.header`
  align-items: center;
  color: ${props => props.theme.aqua};
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.poppins};
  font-weight: 700;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 0.5em;
  text-transform: uppercase;
`;

const SectionHeading = ({ text, echo, id }) => {
  const anchor = id ? id : slugify(text, slugifySettings);
  return (
    <Container id={anchor.toLowerCase()}>
      <Echo aria-hidden="true">{echo ? echo : text}</Echo>
      <StyledH2>{text}</StyledH2>
    </Container>
  );
};

export default SectionHeading;
