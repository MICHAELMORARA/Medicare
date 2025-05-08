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
    autoplaySpeed: 5000,
    arrows: true,
    className: "testimonial-slider"
  };

  const testimonials = [
    {
      image: mike,
      name: "Michael Morara",
      quote: "I was referred to Medicare Hospital by a colleague after struggling with chronic back pain for years. The orthopedic specialists here provided a comprehensive treatment plan that finally gave me relief. Their state-of-the-art facilities and compassionate staff make this the best hospital in Kenya without a doubt.",
    },
    {
      image: musenya,
      name: "Abigael Musenya",
      quote: "Having gone to different hospitals and not getting help, we landed at Medicare. My brother was admitted, and after a while, he had a major surgery and was discovered to have cancer of the kidney. After treatment, he's well up to date. The oncology doctors are the best.",
    },
    {
      image: lucie,
      name: "Milcah Nyakina",
      quote: "My experience at Medicare Hospital exceeded all expectations. When I brought my mother in for emergency care, the response was immediate and professional. The nursing staff checked on her hourly, and her doctor explained everything clearly. The follow-up care has been exceptional, and we're grateful for their dedication. We value your service, keep it up!",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-serif text-blue-900 mb-12">
          What Our Clients Say
        </h2>
        
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="outline-none">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative mt-16">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>
                
                <div className="pt-20 text-center">
                  <p className="text-gray-700 italic mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-xl font-semibold text-blue-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Satisfied Patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <style jsx>{`
        /* Custom styles for the slider */
        :global(.testimonial-slider .slick-dots) {
          bottom: -40px;
        }
        
        :global(.testimonial-slider .slick-dots li button:before) {
          font-size: 12px;
          color: #3b82f6;
          opacity: 0.5;
        }
        
        :global(.testimonial-slider .slick-dots li.slick-active button:before) {
          opacity: 1;
          color: #1d4ed8;
        }
        
        :global(.testimonial-slider .slick-prev),
        :global(.testimonial-slider .slick-next) {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
        
        :global(.testimonial-slider .slick-prev:before),
        :global(.testimonial-slider .slick-next:before) {
          font-size: 40px;
          color: #3b82f6;
          opacity: 0.75;
        }
        
        :global(.testimonial-slider .slick-prev) {
          left: -40px;
        }
        
        :global(.testimonial-slider .slick-next) {
          right: -40px;
        }
      `}</style>
    </div>
  );
};

export default Otherpages;