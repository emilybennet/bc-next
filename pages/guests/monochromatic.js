import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/monochromatic.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Monochromatic"
    headshot="/static/images/guests/community/monochromatic.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
