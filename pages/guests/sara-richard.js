import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/sara-richard.mdx";

const MaLarsonProfile = () => (
  <GuestProfile
    name="Sara Richard"
    headshot="/static/images/guests/headshot/richard.jpg"
    Bio={Bio}
  />
);

export default MaLarsonProfile;
