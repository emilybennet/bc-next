import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/thelostnarrator.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="TheLostNarrator"
    headshot="/static/images/guests/community/thelostnarrator.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
