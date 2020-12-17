import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import home1 from './../assets/img/home-1.png';
import home2 from './../assets/img/home-2.png';
import home3 from './../assets/img/home-3.png';

export default class SimpleSlider extends React.Component{
    render(){
        var settings = {
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            centerMode: true,
            centerPadding: '60px',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        centerPadding: '30px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                <div className="p-2">
                    <img src={home1} alt="" width="100%" />
                    <div className="slide-head mt-1">A caption for the above image. </div>
                    <div className="slide-text my-1">information about event</div>
                    <div className="slide-bottom mb-1">
                        <span>June 12, 2018 </span>
                        <span className="float-right">7PM</span>
                    </div>
                </div>
                <div className="p-2">
                    <img src={home2} alt="" width="100%" />
                    <div className="slide-head mt-1">A caption for the above image. </div>
                    <div className="slide-text my-1">information about event</div>
                    <div className="slide-bottom mb-1">
                        <span>June 12, 2018 </span>
                        <span className="float-right">7PM</span>
                    </div>
                </div>
                <div className="p-2">
                    <img src={home3} alt="" width="100%" />
                    <div className="slide-head mt-1">A caption for the above image. </div>
                    <div className="slide-text my-1">information about event</div>
                    <div className="slide-bottom mb-1">
                        <span>June 12, 2018 </span>
                        <span className="float-right">7PM</span>
                    </div>
                </div>
            </Slider>
        );
    }

}