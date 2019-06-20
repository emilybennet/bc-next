import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/scope.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Scope"
    headshot="/static/images/guests/community/scope.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
