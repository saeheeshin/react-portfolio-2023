import "./header.styles.scss";
import NavigationList from "../navigation-list/navigation-list.component";
import Logo from "../logo/logo.component";
import { MediaQuery } from "../../../content/global.data";

const Header = () => {
  const mobileNavigationHandler = () => {
    const mobileDevice = window.matchMedia(MediaQuery.mobile);

    if (mobileDevice.matches) {
      const htmlDom = document.querySelector("html");
      htmlDom.classList.toggle("mobile-menu__expanded");
    }
  };

  return (
    <header>
      <section>
        <button
          aria-expanded="false"
          aria-label="Open Navigation Menu"
          onClick={mobileNavigationHandler}
          className="button__mobile-menu--open"
        >
          <span className="material-symbols-rounded">menu</span>
        </button>
        <Logo logoType="light" logoLocation="header" />

        <NavigationList buttonHandler={mobileNavigationHandler} />
      </section>
    </header>
  );
};

export default Header;
