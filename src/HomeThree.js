import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderThree from './components/HeroSliderThree';
import FeatureIconText from './components/FeatureIconText';
import AboutText from './components/AboutText';
import ServiceTabTwo from './components/ServiceTabTwo';
import TestimonialSlider from './components/TestimonialSlider';
import ProjectImageGallery from './components/ProjectImageGallery'
import BlogGridTwo from './components/BlogGridTwo';
import BrandLogoSlider from './components/BrandLogoSlider';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import slider1 from "assets/img/slider/slider1.jpg"
import slider2 from "assets/img/slider/slider2.jpg"
import slider3 from "assets/img/slider/slider3.jpg"
import slider4 from "assets/img/slider/slider4.jpg"
class HomeThree extends Component{
    render(){
        const sliderOptions = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            effect: 'slide',
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
            },
            containerClass: "coming-soon__slider"
          }

          let data = [
            {
              bgImg: slider1,
              sliderTitle: 'Under Construction',
              sliderSubtitle: 'Coming Soon.',
              btnLink: 'tel:16476404714',
              btnText: 'Contact Us',
              btnEl: 'a'
            },
            {
              bgImg: slider2,
              sliderTitle: 'Under Construction',
              sliderSubtitle: 'Coming Soon.',
              btnLink: 'tel:16476404714',
              btnText: 'Contact Us',
              btnEl: 'a'
            },
            {
              bgImg: slider3,
              sliderTitle: 'Under Construction',
              sliderSubtitle: 'Coming Soon.',
              btnLink: 'tel:16476404714',
              btnText: 'Contact Us',
              btnEl: 'a'
            },
            {
              bgImg: slider4,
              sliderTitle: 'Under Construction',
              sliderSubtitle: 'Coming Soon.',
              btnLink: 'tel:16476404714',
              btnText: 'Contact Us',
              btnEl: 'a'
            }
          ];
        return(
            <div>

                {/* Navigation bar */}
                <NavBar/>

                {/* Hero slider */}
                <HeroSliderThree
                    data={data}
                    sliderOptions={sliderOptions}
                />

                {/* Feature icon text */}
                <FeatureIconText/>

                {/* About text */}
                <AboutText/>

                {/* Service Tab */}
                <ServiceTabTwo/>

                {/* Testimonial Slider */}
                <TestimonialSlider/>

                {/* Project image gallery */}
                <ProjectImageGallery />

                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />

                {/* Blog grid */}
                <BlogGridTwo  background = "" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default HomeThree;