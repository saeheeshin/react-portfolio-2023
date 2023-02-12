import "./footer.styles.scss";
import { FooterData } from "../../../content/global.data";
import parse from "html-react-parser";
import Logo from "../logo/logo.component";
import SocialLink from "../social-link/social-link.component";
import { backToTop } from "../../../scripts/script";

const Footer = () => {
  const { withLove, title, text } = FooterData;

  return (
    <footer>
      <section>
        <div className="logo-wrapper">
          <Logo logoType="inverted-badge" logoLocation="footer" />
        </div>
        <p className="with-love">{parse(withLove)}</p>
        <div onClick={backToTop} className="butterfly"></div>

        <div className="content">
          <h4>{title}</h4>
          <p>{parse(text)}</p>
          <SocialLink />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
