import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/imdrunkontea.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Brandon Dunn"
    headshot="/static/images/guests/community/imdrunkontea.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
