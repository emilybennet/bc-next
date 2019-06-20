import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/jhaller.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Jhaller"
    headshot="/static/images/guests/community/jhaller.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
