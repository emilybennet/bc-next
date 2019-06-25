import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/horizon.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Horizon"
    headshot="/static/images/guests/community/horizon.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
