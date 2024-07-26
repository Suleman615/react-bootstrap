import React from "react";
import Slider from "react-slick";
import logo_1 from '../assets/Logo-1.svg'
import logo_2 from '../assets/Logo-2.svg'
import logo_3 from '../assets/Logo-3.svg'
import logo_4 from '../assets/Logo-4.svg'
import logo_5 from '../assets/Logo-5.svg'
import logo_6 from '../assets/Logo-6.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LogoSlider() {
  const settings = {
    className: 'center',
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 800,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="  "  style={{width:''}}>
      <Slider {...settings}>
        <div >
          <img className="mx-auto" src={logo_1} alt="Logo"  />
        </div>
        <div>
          <img className="mx-auto" src={logo_2} alt="Logo"  />
        </div>
        <div>
          <img className="mx-auto" src={logo_3} alt="Logo"  />
        </div>
        <div>
          <img className="mx-auto" src={logo_4} alt="Logo"  />
        </div>
        <div>
          <img className="mx-auto" src={logo_5} alt="Logo"  />
        </div>
        <div>
          <img className="mx-auto" src={logo_6} alt="Logo"  />
        </div>
      </Slider>
    </div>
  );
}

export default LogoSlider;
