import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/lauren-faust.mdx";

const LaurenFaustProfile = () => (
  <GuestProfile
    name="Lauren Faust"
    headshot="/static/images/guests/headshot/faust.jpg"
    Bio={Bio}
  />
);

export default LaurenFaustProfile;
