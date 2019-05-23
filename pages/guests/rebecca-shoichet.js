import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/rebecca-shoichet.mdx";

const RebeccaShoichetProfile = () => (
  <GuestProfile
    name="Rebecca Shoichet"
    headshot="/static/images/guests/headshot/shoichet.jpg"
    Bio={Bio}
  />
);

export default RebeccaShoichetProfile;
