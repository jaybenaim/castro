import React, { Component } from "react";
import HeroSliderThree from "components/HeroSliderThree";
import image1 from "assets/img/landing/hero-bg.jpg"

import "./comingSoon.css"

class ComingSoon extends Component {
  state = {  }
  render() {

    const sliderOptions = {
      slidesPerView : 1,
      loop: false,
      speed: 1000,
      watchSlidesVisibility: true,
      // effect: 'slide',
      // navigation: {
      //     nextEl: '.ht-swiper-button-next',
      //     prevEl: '.ht-swiper-button-prev'
      // },
      // renderPrevButton: () => (
      //     <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
      //   ),
      //   renderNextButton: () => (
      //     <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
      //   ),
      // autoplay: {
      //     delay: 5000,
      // },
      containerClass: "coming-soon"
    }

    let data = [
      {
        bgImg: image1,
        sliderTitle: 'Under Construction',
        sliderSubtitle: 'Coming Soon.',
        btnLink: 'tel:16476404714',
        btnText: 'Contact Us',
        btnEl: 'a'
      }
    ];

    return (
      <div>
        <HeroSliderThree
          data={data}
          sliderOptions={sliderOptions}
          />
      </div>
     );
  }
}

export default ComingSoon;