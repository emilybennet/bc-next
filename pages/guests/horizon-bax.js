import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/horizon-bax.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Horizon Bax"
    headshot="/static/images/guests/community/horizon-bax.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
