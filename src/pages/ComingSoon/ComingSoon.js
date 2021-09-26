import React, { Component } from "react";
import HeroSliderThree from "components/HeroSliderThree";
import image1 from "assets/img/landing/hero-bg.jpg"
import { Link } from "react-router-dom";

class ComingSoon extends Component {
  state = {  }
  render() {

    const sliderOptions = {
      slidesPerView : 1,
      loop: false,
      speed: 1000,
      watchSlidesVisibility: false,
      shouldSwiperUpdate: false,
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
      containerClass: "coming-soon__slider"
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
      <div className="coming-soon hero-slider-area">
        <div className="swiper-slide">
            <div
              className="hero-slider__single-item"
              style={{
                  backgroundImage: `url('${data[0].bgImg}')` }}>
                  <div className="hero-slider__content-wrapper">
                      <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                          <div className="hero-slider__content m-auto text-center">
                              <h2 className="hero-slider__title">{data[0].sliderTitle}</h2>
                              <p className="hero-slider__text">{data[0].sliderSubtitle}</p>
                              {data[0].btnEl === 'a' ? (
                                  <a className="hero-slider__btn hero-slider__btn--style2" href={`${data[0].btnLink}`}>{data[0].btnText}</a>
                              ) : (
                                  <Link className="hero-slider__btn hero-slider__btn--style2" to={`${data[0].btnLink}`}>{data[0].btnText}</Link>
                              )}
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
        </div>

        {/*
          <HeroSliderThree
          data={data}
          sliderOptions={sliderOptions}
          />
        */}
      </div>
     );
  }
}

export default ComingSoon;