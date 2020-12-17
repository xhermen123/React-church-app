import React from 'react';
import connectImg from './../assets/img/connect.png';
import c3 from './../assets/img/c3.png';
import blurImg from './../assets/img/blur.png';
import c3_church from './../assets/img/c3_church.png';
import textTop from './../assets/img/text-top.png';
import map from './../assets/img/staticmap.png';

export default class Connect extends React.Component{
    render(){
        return (
            <div className="connect">
                <div className="position-relative">
                    <img src={connectImg} className="backImg desktop-tablet-img" alt=""/>
                    <img src={c3} className="c3 desktop-tablet-img" alt=""/>
                    <img src={blurImg} className="blurImg" alt=""/>
                    <div className="mobile-img">
                        <img src={connectImg} className="w-100" alt=""/>
                        <img src={c3_church} className="c3_church_other" alt=""/>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-parent">
                        <div className="col">
                            <img src={textTop} className="textImg" alt=""/>
                            <div className="text">
                                <div className="text-head mb-3">Connect Groups</div>
                                <div className="text-content secondColor">
                                    Our connect groups are the core of who we are. Connect groups are not just another program but the place where you can grow and really be known. We run 3 seasons of Connect Groups throughout the year: fall; winter; and spring. Our current season launches the last week of September.
                                    <br/>
                                    <br/>
                                    Choose a group, contact the leader and try it out. Sometimes it takes a little while to find your fit, but you will.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="map">
                                <img src={map} alt="" width="100%" />
                                <div id="map_1"></div>
                                <div className="map-head mt-1">Family Potluck</div>
                                <div className="secondColor">Rachel & Robby Collins</div>
                                <div className="secondColor">715 Girard Rd, Kelowna, BC</div>
                                <div className="secondColor">Kelowna Campus</div>
                                <div className="secondColor">(250) 870-1116</div>
                                <div className="slide-bottom mb-1">
                                    <span>June 12, 2018 </span>
                                    <span className="float-right">7PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="map">
                                <img src={map} alt="" width="100%" />
                                <div id="map_2"></div>
                                <div className="map-head mt-1">Family Potluck</div>
                                <div className="secondColor">Rachel & Robby Collins</div>
                                <div className="secondColor">715 Girard Rd, Kelowna, BC</div>
                                <div className="secondColor">Kelowna Campus</div>
                                <div className="secondColor">(250) 870-1116</div>
                                <div className="slide-bottom mb-1">
                                    <span>June 12, 2018 </span>
                                    <span className="float-right">7PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="map">
                                <img src={map} alt="" width="100%" />
                                <div id="map_3"></div>
                                <div className="map-head mt-1">Family Potluck</div>
                                <div className="secondColor">Rachel & Robby Collins</div>
                                <div className="secondColor">715 Girard Rd, Kelowna, BC</div>
                                <div className="secondColor">Kelowna Campus</div>
                                <div className="secondColor">(250) 870-1116</div>
                                <div className="slide-bottom mb-1">
                                    <span>June 12, 2018 </span>
                                    <span className="float-right">7PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="map">
                                <img src={map} alt="" width="100%" />
                                <div id="map_4"></div>
                                <div className="map-head mt-1">Family Potluck</div>
                                <div className="secondColor">Rachel & Robby Collins</div>
                                <div className="secondColor">715 Girard Rd, Kelowna, BC</div>
                                <div className="secondColor">Kelowna Campus</div>
                                <div className="secondColor">(250) 870-1116</div>
                                <div className="slide-bottom mb-1">
                                    <span>June 12, 2018 </span>
                                    <span className="float-right">7PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}