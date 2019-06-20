import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/alumx.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Alumx"
    headshot="/static/images/guests/community/alumx.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
