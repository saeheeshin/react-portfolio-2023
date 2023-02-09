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
        gap: "0",
      }}
    >
      <SplideSlide>
        <div className="content">Test</div>
      </SplideSlide>
      <SplideSlide>
        <div className="content">Test</div>
      </SplideSlide>
      <SplideSlide>
        <div className="content">Test</div>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
