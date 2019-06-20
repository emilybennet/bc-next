import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/silverquill.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="SilverQuill"
    headshot="/static/images/guests/community/silverquill.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
