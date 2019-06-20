import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/skywriter.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Jeffrey Wells"
    headshot="/static/images/guests/community/skywriter.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
