import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/creber.mdx";

const MichelleCreberProfile = () => (
  <GuestProfile
    name="Michelle Creber"
    headshot="/static/images/guests/headshot/creber.jpg"
    Bio={Bio}
  />
);

export default MichelleCreberProfile;
