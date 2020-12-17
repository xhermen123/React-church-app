import React from 'react';
import SliderImg from './SliderImg';

import homeImg from './../assets/img/home.png';
import c3 from './../assets/img/c3.png';
import blurImg from './../assets/img/blur.png';
import textTop from './../assets/img/text-top.png';
import home4 from './../assets/img/home-4.png';
import home5 from './../assets/img/home-5.png';
import home6 from './../assets/img/home-6.png';
import vernonImg from './../assets/img/vernon.png';
import revelstokeImg from './../assets/img/contact.png';
import kelownaImg from './../assets/img/visit.png';
import c3_kelowna from './../assets/img/c3_kelowna.png';
import c3_vernon from './../assets/img/c3_vernon.png';
import c3_revelstoke from './../assets/img/c3_revelstoke.png';
import c3_church from './../assets/img/c3_church.png';
import banner from './../assets/img/banner.png';

export default class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <div className="position-relative">
                    <img src={homeImg} className="backImg desktop-tablet-img" alt=""/>
                    <img src={c3} className="c3 desktop-tablet-img" alt=""/>
                    <img src={blurImg} className="blurImg" alt=""/>
                    <div className="mobile-img">
                        <img src={banner} className="banner" alt=""/>
                        <img src={c3_church} className="c3_church" alt=""/>
                    </div>
                </div>


                <div className="container">
                    <div className="row text-parent">
                        <div className="col">
                            <img src={textTop} className="textImg" alt=""/>
                            <div className="text">
                                <div className="text-head text-center mb-3">we’re stoked you’re here</div>
                                <div className="text-content secondColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta augue sit amet nibh placerat, a hendrerit justo vestibulum. Suspendisse potenti. Sed facilisis varius sodales. Nulla ac mi neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam pulvinar tristique mauris cursus consectetur. Aliquam non pellentesque arcu. In pellentesque orci quis laoreet varius. Pellentesque in eros gravida, mollis nulla sed, tristique nisi. Nullam lacus lacus, posuere sit amet elit sit amet, elementum sagittis turpis. Maecenas varius, felis consectetur maximus porta, massa sapien volutpat nisl, iaculis malesuada leo felis sed mauris. Morbi sit amet leo enim. Praesent auctor faucibus lorem ac tincidunt. Fusce suscipit iaculis varius.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 col-lg-4  mt-3">
                            <div className="row">
                                <div className="col img-wrap">
                                    <img src={home4} className="w-100 h-1" alt=""/>
                                    <div className="img-description">
                                        <div className="desc-head">Lorem Ipsum</div>
                                        <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 tablet-img">
                                <div className="col img-wrap">
                                    <img src={home6} className="w-100 h-1" alt=""/>
                                    <div className="img-description">
                                        <div className="desc-head">Lorem Ipsum</div>
                                        <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 img-wrap mt-3">
                            <img src={home5} className="w-100 h-2" alt=""/>
                            <div className="img-description">
                                <div className="desc-head">Lorem Ipsum</div>
                                <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 img-wrap mt-3 desktop-mobile-img">
                            <img src={home6} className="w-100 h-1" alt=""/>
                            <div className="img-description">
                                <div className="desc-head">Lorem Ipsum</div>
                                <div className="desc-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus nec tortor nec imperdiet. Donec nec erat quis turpis auctor fringilla. Cras elementum eget justo et tristique.</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-head mb-2 font-20">ONE CHURCH, THREE LOCATIONS.</div>
                </div>
                <div className="bottomImg desktop-img">
                    <img src={vernonImg} className="w-100" alt="" />
                    <div className="bottom-text w-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="display-table">
                                        <a className="link" href="/Vernon"><img src={c3_vernon} className="img-h" alt=""/></a>
                                        <div className="line"></div>
                                        <div className="line-font">COMING THIS FALL</div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <a className="link" href="/Revelstoke"><img src={c3_revelstoke} className="img-h" alt=""/></a>
                                    <div className="line"></div>
                                    <div className="line-font">10AM</div>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <div className="display-table float-right">
                                        <a className="link" href="/Kelowna"><img src={c3_kelowna} className="img-h" alt=""/></a>
                                        <div className="line"></div>
                                        <div className="line-font">10AM & 6PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tablet-mobile-img">
                    <div className="bottomImg">
                        <img src={revelstokeImg} className="w-100" alt="" />
                        <div className="bottom-text">
                            <div className="col text-center">
                                <a className="link" href="/Revelstoke"><img src={c3_revelstoke} className="img-h" alt=""/></a>
                                <div className="line"></div>
                                <div className="line-font">10AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomImg">
                        <img src={kelownaImg} className="w-100" alt="" />
                        <div className="bottom-text">
                            <div className="col text-center">
                                <a className="link" href="/Kelowna"><img src={c3_kelowna} className="img-h" alt=""/></a>
                                <div className="line"></div>
                                <div className="line-font">10AM & 6PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomImg">
                        <img src={vernonImg} className="w-100" alt="" />
                        <div className="bottom-text">
                            <div className="col text-center">
                                <a className="link" href="/Vernon"><img src={c3_vernon} className="img-h" alt=""/></a>
                                <div className="line"></div>
                                <div className="line-font">COMING THIS FALL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-slider">
                    <div className="container">
                        <div className="text-head">
                            upcoming events
                        </div>
                        <div className="slider-img">
                            <SliderImg />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}