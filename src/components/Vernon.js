import React from 'react';
import vernon from './../assets/img/vernon.png';
import vernonTablet from './../assets/img/vernonTablet.png';
import mobileVernon from './../assets/img/mobileVernon.png';
import c3_vernon_logo from './../assets/img/c3_vernon_logo.png';
import blurImg from './../assets/img/blur-other.png';

export default class Vernon extends React.Component{
    render(){
        return (
            <div className="vernon position-relative">
                <img src={vernon} className="w-100 H100 desktop-img" alt=""/>
                <img src={vernonTablet} className="w-100 H100 tablet-img" alt=""/>
                <img src={mobileVernon} className="w-100 H100 mobile-img" alt=""/>
                <img src={c3_vernon_logo} className="c3_vernon_logo desktop-tablet-img" alt=""/>
                <img src={blurImg} className="blurImg" alt=""/>
                <div className="vernon-btn">
                    <img src={c3_vernon_logo} className="mobile-img W35 mb-3 mx-auto" alt=""/>
                    <div className="vernon-btn-head mb-3">COMING THIS FALL</div>
                    <a href="/home"><div className="vernon-btn-content">RETURN TO HOMEPAGE</div></a>
                </div>
            </div>
        );
    }

}