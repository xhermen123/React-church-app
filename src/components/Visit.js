import React from 'react';

import vernonImg from './../assets/img/vernon.png';
import revelstokeImg from './../assets/img/contact.png';
import kelownaImg from './../assets/img/visit.png';
import c3_kelowna from './../assets/img/c3_kelowna.png';
import c3_vernon from './../assets/img/c3_vernon.png';
import c3_revelstoke from './../assets/img/c3_revelstoke.png';

export default class Visit extends React.Component{
    render(){
        return (
            <div className="visit">
                <div className="bottomImg desktop-img">
                    <img src={kelownaImg} className="w-100 H100" alt="" />
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
            </div>
        );
    }

}