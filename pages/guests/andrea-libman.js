import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/andrea-libman.mdx";

const AndreaLibmanProfile = () => (
  <GuestProfile
    name="Andrea Libman"
    headshot="/static/images/guests/headshot/libman.jpg"
    Bio={Bio}
  />
);

export default AndreaLibmanProfile;
