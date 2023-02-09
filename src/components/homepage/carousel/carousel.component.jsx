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
        <div className="content">
          <article>
            <h2>HOME</h2>
          </article>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="content">
          <article>
            <h2>PORTFOLIO</h2>
          </article>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="content">
          <article>
            <h2>RESUME</h2>
          </article>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="content">
          <article>
            <h2>ABOUT ME</h2>
          </article>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
