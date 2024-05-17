import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mike from "../images/mike.png";
import musenya from "../images/musenya.png";
import lucie from "../images/lucie.png";

export const Otherpages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000 // Adjust as needed
  };

  return (
    <Slider {...settings}>
      <div className="slide pt-52 md:pt-60 h-96  ">
        <div className="content">
          <h2 className="font-bold text-4xl text-center font-serif">What our client say</h2>
          <p className="text-black font-semibold text-lg text-center mt-6 italic">
            The best Hospital in Kenya
          </p>
          <div className="image-container">
            <img className="rounded-full mt-8 mx-auto" src={mike} alt="" style={{width: '100px', height: '100px'}} />
            <h3 className="text-center mt-8 text-lg italic ">Michael Morara</h3>
          </div>
        </div>
      </div>
      <div className="slide pt-52 h-96">
        <div className="content">
          <h2 className="font-bold text-4xl text-center font-serif">What our client say</h2>
          <p className="text-black font-semibold text-normal mt-2 text-center italic">
            Having gone to different hospitals and not getting help, we landed at Medicare. My brother was admitted, and after a while, he had a major surgery and was discovered to have cancer of the kidney. After treatment, he's well up to date. The oncology doctors are the best.
          </p>
          <div className="image-container">
            <img className="rounded-full mt-4 mx-auto" src={musenya} alt="" style={{width: '100px', height: '100px'}} />
            <h3 className="text-center mt-4 text-lg italic">Abigael Musenya</h3>
          </div>
        </div>
      </div>
      <div className="slide pt-52 h-96">
        <div className="content">
          <h2 className="font-bold text-4xl text-center font-serif">What our client say</h2>
          <p className="text-black font-semibold text-lg text-center mt-6 italic">
            We value your service, keep it up!
          </p>
          <div className="image-container">
            <img className="rounded-full mt-8 mx-auto" src={lucie} alt="" style={{width: '100px', height: '100px'}} />
            <h3 className="text-center mt-8 text-lg italic">Milcah Nyakina</h3>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Otherpages;
