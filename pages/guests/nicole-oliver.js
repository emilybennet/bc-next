import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/nicole-oliver.mdx";

const NicoleOliverProfile = () => (
  <GuestProfile
    name="Nicole Oliver"
    headshot="/static/images/guests/headshot/oliver.jpg"
    Bio={Bio}
  />
);

export default NicoleOliverProfile;
