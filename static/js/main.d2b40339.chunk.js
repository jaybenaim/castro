(this.webpackJsonpcastro=this.webpackJsonpcastro||[]).push([[0],{382:function(e,t,c){},397:function(e,t,c){"use strict";c.r(t);var i=c(21),s=c(22),a=c(24),n=c(23),l=(c(189),c(199),c(2)),r=c.n(l),o=c(76),d=c.n(o),j=(c(382),c(54)),h=c(15),b=c(0),m=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(){var e;Object(i.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={active:!1},e.toggleMobileMenu=function(){e.setState({active:!e.state.active})},e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){for(var e=document.getElementById("offcanvas-navigation"),t=e.querySelectorAll(".sub-menu"),c=0;c<t.length;c++)t[c].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");var i=e.querySelectorAll(".menu-expand"),s=i.length;function a(){if(!0===this.parentElement.classList.contains("active"))this.parentElement.classList.remove("active");else{for(var e=0;e<s;e++)i[e].parentElement.classList.remove("active");this.parentElement.classList.add("active")}}for(var n=0;n<s;n++)i[n].addEventListener("click",a)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"offcanvas-mobile-menu ".concat(this.state.active?"active":""," "),id:"mobile-menu-overlay",children:[Object(b.jsx)("a",{href:"#/",className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:this.toggleMobileMenu,children:Object(b.jsx)("i",{className:"ion-android-close"})}),Object(b.jsx)("div",{className:"offcanvas-wrapper",children:Object(b.jsxs)("div",{className:"offcanvas-inner-content",children:[Object(b.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/",children:"HOME"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/about-us",children:"ABOUT"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/services",children:"SERVICE"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/projects",children:"PROJECT"})}),Object(b.jsxs)("li",{children:[Object(b.jsx)(h.b,{to:"/contact-us",children:"CONTACT"})," "]})]})}),Object(b.jsxs)("div",{className:"offcanvas-widget-area",children:[Object(b.jsx)("div",{className:"off-canvas-contact-widget",children:Object(b.jsx)("div",{className:"header-contact-info",children:Object(b.jsxs)("ul",{className:"header-contact-info__list",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"ion-android-phone-portrait"})," ",Object(b.jsx)("a",{href:"tel://12452456012",children:"(1245) 2456 012 "})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:"ion-android-mail"})," ",Object(b.jsx)("a",{href:"mailto:info@yourdomain.com",children:"info@yourdomain.com"})]})]})})}),Object(b.jsxs)("div",{className:"off-canvas-widget-social",children:[Object(b.jsx)("a",{href:"#/",title:"Facebook",children:Object(b.jsx)("i",{className:"fa fa-facebook"})}),Object(b.jsx)("a",{href:"#/",title:"Twitter",children:Object(b.jsx)("i",{className:"fa fa-twitter"})}),Object(b.jsx)("a",{href:"#/",title:"LinkedIn",children:Object(b.jsx)("i",{className:"fa fa-linkedin"})}),Object(b.jsx)("a",{href:"#/",title:"Youtube",children:Object(b.jsx)("i",{className:"fa fa-youtube-play"})}),Object(b.jsx)("a",{href:"#/",title:"Vimeo",children:Object(b.jsx)("i",{className:"fa fa-vimeo-square"})})]})]})]})})]})})}}]),c}(l.Component),O=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).activeMobileMenu=function(){s.mobileMenuElement.current.toggleMobileMenu()},s.state={},s.handleScroll=s.handleScroll.bind(Object(j.a)(s)),s.mobileMenuElement=r.a.createRef(),s}return Object(s.a)(c,[{key:"handleScroll",value:function(){this.mount&&this.setState({scroll:window.scrollY})}},{key:"componentDidMount",value:function(){this.mount=!0;var e=document.querySelector("nav");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.scroll>this.state.top?document.body.style.paddingTop="".concat(this.state.height,"px"):document.body.style.paddingTop=0}},{key:"componentWillUnmount",value:function(){this.mount=!1}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"header-area header-sticky header-sticky--default ".concat(this.state.scroll>this.state.top?"is-sticky":""),children:Object(b.jsxs)("div",{className:"header-area__desktop header-area__desktop--default",children:[Object(b.jsx)("div",{className:"header-top-bar",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsx)("div",{className:"top-bar-left-wrapper",children:Object(b.jsx)("div",{className:"social-links social-links--white-topbar d-inline-block",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//facebook.com",children:Object(b.jsx)("i",{className:"zmdi zmdi-facebook"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//twitter.com",children:Object(b.jsx)("i",{className:"zmdi zmdi-twitter"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//vimeo.com",children:Object(b.jsx)("i",{className:"zmdi zmdi-vimeo"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//linkedin.com",children:Object(b.jsx)("i",{className:"zmdi zmdi-linkedin-box"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//skype.com",children:Object(b.jsx)("i",{className:"zmdi zmdi-skype"})})})]})})})}),Object(b.jsx)("div",{className:"col-lg-8",children:Object(b.jsx)("div",{className:"top-bar-right-wrapper",children:Object(b.jsx)("a",{href:"/contact-us",className:"ht-btn ht-btn--default d-inline-block",children:"GET A QUOTE"})})})]})})}),Object(b.jsx)("div",{className:"header-info-area",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row align-items-center",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsxs)("div",{className:"header-info-wrapper align-items-center",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{src:"assets/img/logo/logo.png",className:"img-fluid",alt:"Logo"})})}),Object(b.jsxs)("div",{className:"header-contact-info",children:[Object(b.jsxs)("div",{className:"header-info-single-item",children:[Object(b.jsx)("div",{className:"header-info-single-item__icon",children:Object(b.jsx)("i",{className:"zmdi zmdi-smartphone-android"})}),Object(b.jsxs)("div",{className:"header-info-single-item__content",children:[Object(b.jsx)("h6",{className:"header-info-single-item__title",children:"Phone"}),Object(b.jsx)("p",{className:"header-info-single-item__subtitle",children:"98 9875 5968 54"})]})]}),Object(b.jsxs)("div",{className:"header-info-single-item",children:[Object(b.jsx)("div",{className:"header-info-single-item__icon",children:Object(b.jsx)("i",{className:"zmdi zmdi-home"})}),Object(b.jsxs)("div",{className:"header-info-single-item__content",children:[Object(b.jsx)("h6",{className:"header-info-single-item__title",children:"Address"}),Object(b.jsx)("p",{className:"header-info-single-item__subtitle",children:"your address goes here"})]})]})]}),Object(b.jsx)("div",{className:"mobile-navigation-icon",id:"mobile-menu-trigger",onClick:this.activeMobileMenu,children:Object(b.jsx)("i",{})})]})})})})}),Object(b.jsx)("div",{className:"header-navigation-area default-bg",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsx)("div",{className:"header-navigation header-navigation--header-default position-relative",children:Object(b.jsx)("div",{className:"header-navigation__nav position-static",children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/",children:"HOME"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/about-us",children:"ABOUT"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/services",children:"SERVICE"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/projects",children:"PROJECT"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/contact-us",children:"CONTACT"})})]})})})})})})})})]})}),Object(b.jsx)(m,{ref:this.mobileMenuElement})]})}}]),c}(l.Component),x=c(187),u=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).state={},s.handleScroll=s.handleScroll.bind(Object(j.a)(s)),s.scrollToTop=s.scrollToTop.bind(Object(j.a)(s)),s}return Object(s.a)(c,[{key:"handleScroll",value:function(){this.mount&&this.setState({scroll:window.scrollY})}},{key:"scrollToTop",value:function(){x.animateScroll.scrollToTop()}},{key:"componentDidMount",value:function(){this.mount=!0;var e=document.querySelector("nav");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.scroll>this.state.top?document.getElementById("scroll-top").classList.add("show"):document.getElementById("scroll-top").classList.remove("show")}},{key:"componentWillUnmount",value:function(){this.mount=!1}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"footer-area dark-bg",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsx)("div",{className:"footer-content-wrapper section-space--inner--100",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-12",children:Object(b.jsxs)("div",{className:"footer-intro-wrapper",children:[Object(b.jsx)("div",{className:"footer-logo",children:Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("img",{src:"assets/img/logo/logo-light.png",className:"img-fluid",alt:""})})}),Object(b.jsx)("div",{className:"footer-desc",children:"Lorem ipsum dolor sit amet consect adipisici elit, sed do eiusmod tempor incididuk ut labore et dolore magna aliqua Ut enim"})]})}),Object(b.jsx)("div",{className:"col-xl-2 offset-xl-1 col-lg-3 col-md-4",children:Object(b.jsxs)("div",{className:"footer-widget",children:[Object(b.jsx)("h4",{className:"footer-widget__title",children:"USEFUL LINKS"}),Object(b.jsxs)("ul",{className:"footer-widget__navigation",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Company News"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Careers"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Contact Us"})})]})]})}),Object(b.jsx)("div",{className:"col-xl-2 offset-xl-1 col-lg-3 col-md-4",children:Object(b.jsxs)("div",{className:"footer-widget",children:[Object(b.jsx)("h4",{className:"footer-widget__title",children:"USEFUL LINKS"}),Object(b.jsxs)("ul",{className:"footer-widget__navigation",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Our Services"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Showcase"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Affliates"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Disclaimer"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"".concat("http://jaybenaim.github.io/castro","/"),children:"Privacy Policy"})})]})]})}),Object(b.jsx)("div",{className:"col-xl-2 offset-xl-1 col-lg-3 col-md-4",children:Object(b.jsxs)("div",{className:"footer-widget mb-0",children:[Object(b.jsx)("h4",{className:"footer-widget__title",children:"CONTACT US"}),Object(b.jsxs)("div",{className:"footer-widget__content",children:[Object(b.jsx)("p",{className:"address",children:"Your address goes here, street Crossroad123."}),Object(b.jsxs)("ul",{className:"contact-details",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"P:"}),"99 55 66 88 526"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"F:"}),"55 44 77 62"]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"E:"}),"cons@email.com"]})]})]})]})})]})})})})}),Object(b.jsx)("div",{className:"footer-copyright-wrapper",children:Object(b.jsx)("div",{className:"footer-copyright text-center",children:Object(b.jsxs)("p",{className:"copyright-text",children:["\xa9 Castro 2021 Made With ",Object(b.jsx)("i",{className:"fa fa-heart"})," By HasThemes"]})})})]}),Object(b.jsx)("button",{className:"scroll-top",id:"scroll-top",onClick:this.scrollToTop,children:Object(b.jsx)("i",{className:"ion-android-arrow-up"})})]})}}]),c}(l.Component),f=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"error-page-wrapper d-flex align-items-center",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-6 col-md-9 m-auto text-center",children:Object(b.jsx)("div",{className:"error-content-centered d-flex align-items-center justfy-content-center",children:Object(b.jsxs)("div",{className:"error-page-content-wrap",children:[Object(b.jsx)("h2",{children:"404"}),Object(b.jsx)("h3",{children:"PAGE NOT FOUND"}),Object(b.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable."}),Object(b.jsx)("a",{href:"/",className:"ht-btn ht-btn--default ht-btn--default--dark-hover",children:"Back to Home Page"})]})})})})})})}),Object(b.jsx)(u,{}),Object(b.jsx)(m,{})]})}}]),c}(l.Component),v=c(13),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=c(123),y=c(188),w=c.n(y),k=(l.Component,c.p+"static/media/hero-bg.75c63b33.jpg"),_=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(){var e;Object(i.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(s.a)(c,[{key:"render",value:function(){var e=[{bgImg:k,sliderTitle:"Under Construction",sliderSubtitle:"Coming Soon.",btnLink:"tel:16476404714",btnText:"Contact Us",btnEl:"a"}];return Object(b.jsx)("div",{className:"coming-soon hero-slider-area",children:Object(b.jsx)("div",{className:"swiper-slide",children:Object(b.jsx)("div",{className:"hero-slider__single-item",style:{backgroundImage:"url('".concat(e[0].bgImg,"')")},children:Object(b.jsx)("div",{className:"hero-slider__content-wrapper",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsxs)("div",{className:"hero-slider__content m-auto text-center",children:[Object(b.jsx)("h2",{className:"hero-slider__title",children:e[0].sliderTitle}),Object(b.jsx)("p",{className:"hero-slider__text",children:e[0].sliderSubtitle}),"a"===e[0].btnEl?Object(b.jsx)("a",{className:"hero-slider__btn hero-slider__btn--style2",href:"".concat(e[0].btnLink),children:e[0].btnText}):Object(b.jsx)(h.b,{className:"hero-slider__btn hero-slider__btn--style2",to:"".concat(e[0].btnLink),children:e[0].btnText})]})})})})})})})})}}]),c}(l.Component),T=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(b.jsx)(h.a,{basename:"/castro",children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",component:_}),Object(b.jsx)(v.a,{exact:!0,path:"/404",component:f}),Object(b.jsx)(v.a,{component:f})]})})}}]),c}(l.Component);d.a.render(Object(b.jsx)(T,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("http://jaybenaim.github.io/castro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("http://jaybenaim.github.io/castro","/service-worker.js");g?(!function(e,t){fetch(e).then((function(c){var i=c.headers.get("content-type");404===c.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()}},[[397,1,2]]]);
//# sourceMappingURL=main.d2b40339.chunk.js.map