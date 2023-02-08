import { MediaQuery } from "../../../content/global.data";

const Picture = ({
  details: { className, mobileImagePath, desktopImagePath, altTag },
}) => {
  return (
    <picture>
      <source media={MediaQuery.desktop} src={desktopImagePath} />
      <source media={MediaQuery.mobile} src={mobileImagePath} />
      <img
        {...(className === undefined ? "" : { className: className })}
        src={mobileImagePath}
        alt={altTag}
      />
    </picture>
  );
};

export default Picture;
