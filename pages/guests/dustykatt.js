import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/dustykatt.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="DustyKatt"
    headshot="/static/images/guests/community/dustykatt.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
