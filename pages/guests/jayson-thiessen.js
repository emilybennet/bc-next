import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/jayson-thiessen.mdx";

const JaysonThiessenProfile = () => (
  <GuestProfile
    name="Jayson Thiessen"
    headshot="/static/images/guests/headshot/thiessen.jpg"
    Bio={Bio}
  />
);

export default JaysonThiessenProfile;
