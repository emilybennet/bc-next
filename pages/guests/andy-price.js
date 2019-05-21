import GuestProfile from "../../components/GuestProfile";
import Bio from "../../content/guest-bios/andy-price.mdx";

const AndyPriceProfile = () => (
  <GuestProfile
    name="Andy Price"
    headshot="/static/images/guests/headshot/price.jpg"
    Bio={Bio}
  />
);

export default AndyPriceProfile;
