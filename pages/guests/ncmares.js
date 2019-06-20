import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/ncmares.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="NCMares"
    headshot="/static/images/guests/community/ncmares.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
