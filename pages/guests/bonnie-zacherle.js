import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/bonnie-zacherle.mdx";

const BonnieZacherleProfile = () => (
  <GuestProfile
    name="Bonnie Zacherle"
    headshot="/static/images/guests/headshot/zacherle.jpg"
    Bio={Bio}
  />
);

export default BonnieZacherleProfile;
