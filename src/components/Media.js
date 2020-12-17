import React from 'react';
import mediaImg from './../assets/img/media.png';
import c3 from './../assets/img/c3.png';
import blurImg from './../assets/img/blur-other.png';
import c3_church from './../assets/img/c3_church.png';

export default class Media extends React.Component{
    render(){
        return (
            <div>
                <div className="position-relative">
                    <img src={mediaImg} className="backImg desktop-tablet-img" alt=""/>
                    <img src={c3} className="c3 desktop-tablet-img" alt=""/>
                    <img src={blurImg} className="blurImg" alt=""/>
                    <div className="media-player">
                        <div className="media-head">PS JOSIAH OLSON - THIS IS NOT A TEST</div>
                        <div className="media-day">May 27, 2018</div>
                        <div className="player">
                            <audio controls>
                                <source src="horse.ogg" type="audio/ogg" />
                                <source src="horse.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                    <div className="mobile-img">
                        <img src={mediaImg} className="w-100 minH450" alt=""/>
                        <img src={c3_church} className="c3_church_other" alt=""/>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="media">
                        <div className="media-title">PS JOSIAH OLSON - THIS IS NOT A TEST</div>
                        <div className="secondColor">May 27, 2018</div>
                    </div>
                    <div className="media">
                        <div className="media-title">PS JOSIAH OLSON - THIS IS NOT A TEST</div>
                        <div className="secondColor">May 27, 2018</div>
                    </div>
                    <div className="media">
                        <div className="media-title">PS JOSIAH OLSON - THIS IS NOT A TEST</div>
                        <div className="secondColor">May 27, 2018</div>
                    </div>
                    <div className="media">
                        <div className="media-title">PS JOSIAH OLSON - THIS IS NOT A TEST</div>
                        <div className="secondColor">May 27, 2018</div>
                    </div>
                </div>
            </div>
        );
    }

}