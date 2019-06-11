import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/ma-larson.mdx";

const MaLarsonProfile = () => (
  <GuestProfile
    name="M.A. Larson"
    headshot="/static/images/guests/headshot/larson.jpg"
    Bio={Bio}
  />
);

export default MaLarsonProfile;
