import React from 'react';
import SliderImg from './SliderImg';
import blurImg from './../assets/img/blur.png';
import textTop from './../assets/img/text-top.png';
import kelowna1 from './../assets/img/kelowna-1.png';
import kelowna2 from './../assets/img/kelowna-2.png';
import kelowna3 from './../assets/img/kelowna-3.png';
import revelstokeImg from './../assets/img/contact.png';
import c3_church_revelstoke from './../assets/img/c3_church_revelstoke.png';
import family from './../assets/img/family.png';
import mobileRevelstoke from './../assets/img/mobileKelowna.png';
import path from './../assets/img/path.png';
import clock from './../assets/img/clock.png';
import house from './../assets/img/house.png';
import phone from './../assets/img/phone.png';
import envelope from './../assets/img/envelope.png';

export default class Revelstoke extends React.Component{
    render(){
        return (
            <div className="revelstoke">
                <div className="position-relative">
                    <img src={revelstokeImg} className="backImg desktop-tablet-img" alt=""/>
                    <img src={c3_church_revelstoke} className="c3_church_revelstoke desktop-tablet-img" alt=""/>
                    <img src={blurImg} className="blurImg" alt=""/>
                    <div className="mobile-img">
                        <img src={mobileRevelstoke} className="banner" alt=""/>
                        <img src={c3_church_revelstoke} className="c3_church_img" alt=""/>
                    </div>
                </div>

                <div className="container">
                    <div className="row text-parent">
                        <div className="col">
                            <img src={textTop} className="textImg" alt=""/>
                            <div className="text">
                                <div className="text-head mb-3">WELCOME TO C3 Church Revelstoke</div>
                                <div className="text-content">
                                    <p>
                                        In the vacation capital of British Columbia, C3 Church Kelowna is an exciting and thriving congregation. Packed full of students, young adults, families and everyone, you’re bound to feel right at home.
                                    </p>
                                    <p>
                                        Our services are full of life, great music, inspiring and practical preaching with exciting C3 Kids running simultaneously for your children. Plus we’ve got midweek connect groups.
                                    </p>
                                    <p>
                                        Come and join on Sunday mornings at 10am or Sunday evenings at 6pm. Make sure you arrive 15 minutes early so you can grab a coffee before the service. Check out the map below for directions and take a look at our calendar for full details of all that’s coming up!
                                    </p>
                                    <p>
                                        We’d love to connect with you on social media so why not click the links below to like, follow and say hello? See you on Sunday!
                                    </p>
                                </div>
                                <div className="secondColor">
                                    <div className="float-left profile">
                                        <img src={family} alt="" className="h90" />
                                    </div>
                                    <div className="profile-revelstoke">
                                        <div className="profile-head">Dave & Kim Olson</div>
                                        <span>Campus Pastors</span>
                                        <br/>
                                        <span>C3 Church Kelowna</span>
                                        <div className="social-kelowna">
                                            <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        JOIN US EVERY SUNDAY 10AM & 6PM
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4 img-wrap mt-3">
                            <img src={kelowna1} className="w-100" alt=""/>
                            <div className="img-description">
                                <div className="desc-head">Lorem Ipsum</div>
                                <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                            </div>
                        </div>
                        <div className="col-md-4 img-wrap mt-3">
                            <img src={kelowna2} className="w-100" alt=""/>
                            <div className="img-description">
                                <div className="desc-head">Lorem Ipsum</div>
                                <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                            </div>
                        </div>
                        <div className="col-md-4 img-wrap mt-3">
                            <img src={kelowna3} className="w-100" alt=""/>
                            <div className="img-description">
                                <div className="desc-head">Lorem Ipsum</div>
                                <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                            </div>
                        </div>
                    </div>
                    <div className="podcasts">
                        <div className="text-head mb-2 font-20">latest podcasts</div>
                        <div></div>
                    </div>
                    <div className="bottom-slider">
                        <div className="text-head">
                            upcoming events
                        </div>
                        <div className="slider-img">
                            <SliderImg />
                        </div>
                    </div>
                    <div className="service">
                        <div className="text-head mb-2 font-20">service times and directions</div>
                        <div className="row">
                            <div className="service-time">
                                <div className="clock mb-3">
                                    <div className="float-left">
                                        <img src={clock} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Service Times:</span>
                                        <br/>
                                        <span>Sundays at 10AM</span>
                                    </div>
                                </div>
                                <div className="house mb-3">
                                    <div className="float-left">
                                        <img src={house} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Address:</span>
                                        <br/>
                                        <span>2410 Ethel Street, Kelowna, BC</span>
                                    </div>
                                </div>
                                <div className="phone mb-3">
                                    <div className="float-left">
                                        <img src={phone} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Phone:</span>
                                        <br/>
                                        <span>250-717-7265</span>
                                    </div>
                                </div>
                                <div className="envelope mb-3">
                                    <div className="float-left">
                                        <img src={envelope} alt=""/>
                                    </div>
                                    <div className="secondColor ml-45 line-height-12">
                                        <span className="font-weight-bold">Email:</span>
                                        <br/>
                                        <span>info@c3church.ca</span>
                                    </div>
                                </div>
                            </div>
                            <div className="service-direction">
                                <img src={path} alt="" className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}