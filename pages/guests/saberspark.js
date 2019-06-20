import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/saberspark.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Saberspark"
    headshot="/static/images/guests/community/saberspark.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
