import { Carousel } from "react-responsive-carousel";

import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import banner4 from "../../assets/banner/banner4.jpg";
import banner6 from "../../assets/banner/banner6.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>

      <div>
        <img src={banner6} />
      </div>
    </Carousel>
  );
};

export default Banner;
