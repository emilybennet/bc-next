import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/jakewhyman.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="JakeWhyMan"
    headshot="/static/images/guests/community/jakewhyman.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
