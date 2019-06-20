import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/obabscribbler.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="ObabScribbler"
    headshot="/static/images/guests/community/obabscribbler.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
