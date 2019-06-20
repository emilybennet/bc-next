import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/minty-root.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Minty Root"
    headshot="/static/images/guests/community/minty-root.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
