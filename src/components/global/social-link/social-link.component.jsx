import "./social-link.styles.scss";
import { SocialMediaData } from "../../../content/global.data";

const SocialLink = () => {
  return (
    <menu className="nav__social">
      {SocialMediaData.map(({ id, className, to, text }) => {
        return (
          <li className={`social-media-link ${className}`} key={id}>
            <a href={to} target="_blank" rel="noreferrer">
              <span>{text}</span>
            </a>
          </li>
        );
      })}
    </menu>
  );
};

export default SocialLink;
