import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/britt-mckillip.mdx";

const BrittMcKillipProfile = () => (
  <GuestProfile
    name="Britt McKillip"
    headshot="/static/images/guests/headshot/mckillip.jpg"
    Bio={Bio}
  />
);

export default BrittMcKillipProfile;
