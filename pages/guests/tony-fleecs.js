import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/tony-fleecs.mdx";

const TonyFleecsProfile = () => (
  <GuestProfile
    name="Tony Fleecs"
    headshot="/static/images/guests/headshot/fleecs.jpg"
    Bio={Bio}
  />
);

export default TonyFleecsProfile;
