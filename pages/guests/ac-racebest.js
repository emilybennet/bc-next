import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/ac-racebest.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="ACRacebest"
    headshot="/static/images/guests/community/ac-racebest.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
