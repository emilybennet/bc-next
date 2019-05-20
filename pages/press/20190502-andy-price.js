import PressReleaseLayout from "../../components/PressReleaseLayout";
import Content, {
  meta
} from "../../content/press-releases/20190502-andy-price.mdx";

const PressReleasePage = props => (
  <PressReleaseLayout Content={Content} meta={meta} />
);

export default PressReleasePage;
