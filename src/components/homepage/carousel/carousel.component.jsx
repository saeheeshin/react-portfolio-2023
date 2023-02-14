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
        gap: "0px",
      }}
    >
      <SplideSlide>
        <div className="carousel__content">
          <section>
            <h2>HOME</h2>
          </section>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="carousel__content">
          <section>
            <h2>PORTFOLIO</h2>
          </section>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="carousel__content">
          <section>
            <h2>RESUME</h2>
          </section>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="carousel__content">
          <section>
            <h2>ABOUT ME</h2>
          </section>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
