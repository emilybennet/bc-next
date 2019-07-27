import styled from "styled-components";
import DarkButton from "../common/DarkButton";
import exhibitData from "../../content/exhibitorList";

const ListContainer = styled.div`
  /* max-width: 300px; */
  max-width: 450px;
  padding-bottom: 70vh;
`;

const ExhibitContainer = styled.div`
  margin-top: 2em;
  padding-top: 2em;

  &:not(:first-of-type) {
    border-top: 4px dotted ${props => props.theme.black};
  }
`;

const ExhbitHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Name = styled.h3`
  color: ${props => props.theme.white};
  font-size: 1.25em;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
  margin: 0 auto 0 0;
`;

const NumberStyled = styled.span`
  background: ${props => props.theme.aqua};
  border-radius: 3px;
  display: inline-block;
  color: ${props => props.theme.deepAbyss};
  font-weight: 700;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  margin-left: 10px;
  min-width: 80px;
  padding: 7px 3px 6px;
  text-align: center;
  &.artist {
    background: ${props => props.theme.gold};
  }
`;

const Metric = styled.p`
  margin: 0 0 1em;
  label {
    color: ${props => props.theme.aqua};
    display: block;
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
`;

const ExhibitLoc = ({ isAA, number }) => (
  <NumberStyled className={isAA ? "artist" : "vendor"}>{number}</NumberStyled>
);

const ExhibitMetric = ({ label, value }) => (
  <Metric>
    <label>{label}:</label>
    <span>{value}</span>
  </Metric>
);

const ExhibitItem = ({
  name,
  booth_number,
  offering,
  accepts,
  url,
  is_artist_alley,
  ...props
}) => (
  <ExhibitContainer id={booth_number.toLowerCase()}>
    <ExhbitHeader>
      <Name>{name}</Name>
      <ExhibitLoc number={booth_number} isAA={is_artist_alley} />
    </ExhbitHeader>

    {offering ? <ExhibitMetric label="Selling" value={offering} /> : ""}
    {accepts ? <ExhibitMetric label="Accepts" value={accepts} /> : ""}

    {url ? (
      <DarkButton text="Website" href={url} target="_blank">
        Website
      </DarkButton>
    ) : (
      ""
    )}
  </ExhibitContainer>
);

const ExhibitList = props => (
  <ListContainer>
    {exhibitData.map(item => (
      <ExhibitItem {...item} key={item.id} />
    ))}
  </ListContainer>
);

export default ExhibitList;
