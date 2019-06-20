import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/community-bios/foal-papers.mdx";

const CommunityProfile = () => (
  <GuestProfile
    name="Foal Papers"
    headshot="/static/images/guests/community/foal-papers.jpg"
    Bio={Bio}
  />
);

export default CommunityProfile;
