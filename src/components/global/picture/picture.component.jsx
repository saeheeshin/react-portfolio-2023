import { MediaQuery } from "../../../content/global.data";

const Picture = ({
  details: { className, mobileImagePath, desktopImagePath, altTag },
}) => {
  return (
    <picture>
      <source media={MediaQuery.desktop} srcSet={desktopImagePath} />
      <source media={MediaQuery.mobile} srcSet={mobileImagePath} />
      <img
        {...(className === undefined ? "" : { className: className })}
        src={mobileImagePath}
        alt={altTag}
      />
    </picture>
  );
};

export default Picture;
