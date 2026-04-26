import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselImages = [
  "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=400&q=80",
  "https://images.unsplash.com/photo-1596422846543-74c6fc0e240e?w=400&q=80",
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&q=80",
  "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
  "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=400&q=80"
];

const PhoneCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        }
      }
    ]
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20">
      {/* The Phone Frame */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[600px] border-[12px] border-gray-900 rounded-[3rem] z-20 pointer-events-none shadow-2xl">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl"></div>
      </div>
      
      {/* White background inside the phone frame */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[600px] bg-white rounded-[3rem] z-0 shadow-lg border-[12px] border-transparent pointer-events-none"></div>

      {/* The Carousel */}
      <div className="relative z-10 pt-[100px] h-[600px] flex flex-col justify-center overflow-hidden w-full max-w-4xl mx-auto slider-container-custom">
        <Slider {...settings}>
          {CarouselImages.map((src, index) => (
            <div key={index} className="px-2 focus:outline-none">
              <div className="bg-white rounded-2xl shadow-md p-4 transition-transform duration-500 mx-auto w-[260px]">
                <img src={src} alt="Product" className="w-full h-40 object-cover rounded-xl mb-4" />
                <h4 className="font-bold text-olive-900 text-sm mb-1 line-clamp-2">Healthy Organic Product Name</h4>
                <p className="text-xs text-olive-600 mb-2">Brand Name</p>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                    85
                  </div>
                  <span className="font-medium text-olive-900">Great Choice</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx="true">{`
        .slider-container-custom .slick-list {
          padding: 20px 0 !important;
          overflow: visible;
        }
        .slider-container-custom .slick-slide {
          opacity: 0.5;
          transform: scale(0.85);
          transition: all 0.5s ease;
        }
        .slider-container-custom .slick-slide.slick-active.slick-center {
          opacity: 1;
          transform: scale(1.1);
          z-index: 30;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default PhoneCarousel;
