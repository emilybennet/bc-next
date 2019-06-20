import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/trish.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Trish Forstner"
    headshot="/static/images/guests/community/trish.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
