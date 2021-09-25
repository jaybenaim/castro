import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';

class HeroSliderThree extends Component{

    render(){
        const defaultSliderOptions = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
        }

        let defaultData = [
            {bgImg: 'slider4.jpg', sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'},
            {bgImg: 'slider5.jpg', sliderTitle: 'Build Your Dream With Passion', sliderSubtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore et dolore.', btnLink: 'contact-us'}
        ];

        let data = this.props.data || defaultData

        let sliderOptions = this.props.sliderOptions || defaultSliderOptions

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div
                    className="hero-slider__single-item"
                    style={{
                        backgroundImage: `url('${val.bgImg}')` }}>
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content m-auto text-center">
                                    <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                    <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                    {val.btnEl === 'a' ? (
                                        <a className="hero-slider__btn hero-slider__btn--style2" href={`${val.btnLink}`}>{val.btnText}</a>
                                    ) : (
                                        <Link className="hero-slider__btn hero-slider__btn--style2" to={`${val.btnLink}`}>{val.btnText}</Link>
                                    )}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <Swiper {...sliderOptions}>
                        {DataList}
                    </Swiper>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderThree;