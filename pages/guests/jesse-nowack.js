import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/jesse-nowack.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Jesse Nowack"
    headshot="/static/images/guests/community/jesse-nowack.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
