import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/magpiepony.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="MagpiePony"
    headshot="/static/images/guests/community/magpiepony.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
