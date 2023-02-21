import "./carousel.styles.scss";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "../../global/button/button.component";
import parse from "html-react-parser";

import { CarouselData } from "../../../content/site.data";

const Carousel = () => {
  return (
    <Splide
      className="carousel__set"
      options={{
        rewind: true,
        width: "100%",
        gap: "0px",
      }}
    >
      {CarouselData.map(
        ({ id, className, title, subTitle, buttonText, buttonDetails }) => {
          return (
            <SplideSlide key={id}>
              <div
                className={`carousel__content carousel__content--${className}`}
              >
                <section>
                  <hgroup>
                    <h1>{parse(title)}</h1>
                    <h4>{subTitle}</h4>
                  </hgroup>
                  <Button details={buttonDetails}>{buttonText}</Button>
                </section>
              </div>
            </SplideSlide>
          );
        }
      )}
    </Splide>
  );
};

export default Carousel;
