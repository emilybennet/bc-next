import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/cathy-weseluck.mdx";

const CathyWeseluckProfile = () => (
  <GuestProfile
    name="Cathy Weseluck"
    headshot="/static/images/guests/headshot/weseluck.jpg"
    Bio={Bio}
  />
);

export default CathyWeseluckProfile;
