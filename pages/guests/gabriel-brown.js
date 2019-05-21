import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/brown.mdx";

const GabeBrownProfile = () => (
  <GuestProfile
    name="Gabriel Brown"
    headshot="/static/images/guests/headshot/brown.jpg"
    Bio={Bio}
  />
);

export default GabeBrownProfile;
