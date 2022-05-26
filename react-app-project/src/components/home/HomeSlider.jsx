import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export class HomeSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="img-slide">
            <img
              src="https://shoppingecommerce.netlify.app/dist/imgs/slides/05.jpg"
              alt="slide-img"
            />
          </div>
          <div className="img-slide">
            <img
              src="https://shoppingecommerce.netlify.app/dist/imgs/slides/04.jpg"
              alt="slide-img"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
