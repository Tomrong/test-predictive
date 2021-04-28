import Slider from "react-slick";
import { BannerStyle } from "./style";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <BannerStyle>
      <div className="main-banner">
        <Slider {...settings}>
          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-bbqxsiriplace-herobanner-desktop-1920x665.jpg" />
          </div>
          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-bbqxsiriplace-herobanner-desktop-1920x665.jpg" />
          </div>
          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-bbqxsiriplace-herobanner-desktop-1920x665.jpg" />
          </div>
        </Slider>
      </div>
    </BannerStyle>
  );
};
export default Banner;
