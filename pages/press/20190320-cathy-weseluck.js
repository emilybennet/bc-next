import PressReleaseLayout from "../../components/PressReleaseLayout";
import Content, {
  meta
} from "../../content/press-releases/20190320-cathy-weseluck.mdx";

const PressReleasePage = props => (
  <PressReleaseLayout Content={Content} meta={meta} />
);

export default PressReleasePage;
