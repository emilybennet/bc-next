import PressReleaseLayout from "../../components/PressRelease/Article";
import Content, {
  meta
} from "../../content/press-releases/20190210-artist-alley-app.mdx";

const PressReleasePage = props => (
  <PressReleaseLayout Content={Content} meta={meta} />
);

export default PressReleasePage;
