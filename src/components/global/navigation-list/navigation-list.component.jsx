import { NavLink } from "react-router-dom";
import { NavigationData } from "../../../content/global.data";
import Logo from "../logo/logo.component";
import SocialLink from "../social-link/social-link.component";

const NavigationList = ({ buttonHandler }) => {
  return (
    <nav>
      <section>
        <button
          aria-expanded="false"
          aria-label="Close Navigation Menu"
          onClick={buttonHandler}
          className="button__mobile-menu--close"
        >
          <span className="material-symbols-rounded">close</span>
        </button>
        <Logo
          logoHandler={buttonHandler}
          logoType="brand"
          logoLocation="header"
        />
      </section>

      <menu className="nav__pages">
        {NavigationData.map(({ id, to, text }) => {
          return (
            <li key={id}>
              <NavLink
                to={to}
                onClick={buttonHandler}
                className={`nav__pages--${text.toLowerCase()}`}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </menu>

      <SocialLink />
    </nav>
  );
};

export default NavigationList;
