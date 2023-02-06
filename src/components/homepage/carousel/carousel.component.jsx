import "./carousel.styles.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Carousel = () => {
  return (
    <Splide
      className="carousel__set"
      options={{
        rewind: true,
        width: "100%",
        gap: "1px",
      }}
    >
      <SplideSlide>
        <img src="https://picsum.photos/200/100" alt="1" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/200/100?grayscale" alt="2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/200/100" alt="2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/200/100?grayscale" alt="2" />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
