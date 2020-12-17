import React from 'react';
import menuImg from './../assets/img/menu.png';
import c3_church from './../assets/img/c3_church.png';

export default class Menu extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            toggle: true
        };
    }
    toggleDrawerMenu() {
        this.setState({
            toggle: !this.state.toggle
        });
    }
    handleClose() {
        this.setState({
            toggle: true
        });
    }
    toggleDrawerMenuMobile() {
        this.setState({
            toggle: !this.state.toggle
        });
        document.body.style.overflow = "hidden";
    }
    handleCloseMobile() {
        this.setState({
            toggle: true
        });
        document.body.style.overflow = "auto";
    }
    render(){
        return (
            <div className="menu">
                <div className="desktop-tablet-img">
                    <div className={(this.state.toggle?"menu-show":"menu-hidden")+" menu-icon"} onClick={() => this.toggleDrawerMenu()}>
                        <span className="align-middle" id="menu">MENU</span>
                        <img src={menuImg} className="menuImg" alt=""/>
                    </div>
                    <div className={this.state.toggle?"menu-hidden":"menu-show"}>
                        <ul className="menu-content m-0">
                            <li className="closeBtn">
                                <i className="fa fa-times float-right" aria-hidden="true" onClick={() => this.handleClose()}></i>
                            </li>
                            <li>
                                <a className="link" href="/home" onClick={() => this.handleClose()}>Home</a>
                            </li>
                            <li>
                                <a className="link" href="/visit" onClick={() => this.handleClose()}>Visit</a>
                            </li>
                            <li>
                                <a className="link" href="/give" onClick={() => this.handleClose()}>Give</a>
                            </li>
                            <li>
                                <a className="link" href="/contact" onClick={() => this.handleClose()}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-img">
                    <div className={(this.state.toggle?"menu-show":"menu-hidden")+" menu-icon"} onClick={() => this.toggleDrawerMenuMobile()}>
                        <img src={menuImg} className="menuImg" alt=""/>
                    </div>
                    <div className={this.state.toggle?"menu-hidden":"menu-show"}>
                        <div className="mobile-closeBtn">
                            <i className="fa fa-times float-right" aria-hidden="true" onClick={() => this.handleCloseMobile()}></i>
                        </div>
                        <ul className="mobile-menu-content m-0">
                            <li className="mobile-menuImg">
                                <img src={c3_church} className="w-100" alt=""/>
                            </li>
                            <li>
                                <a className="link" href="/home" onClick={() => this.handleCloseMobile()}>Home</a>
                            </li>
                            <li>
                                <a className="link" href="/visit" onClick={() => this.handleCloseMobile()}>Visit</a>
                            </li>
                            <li>
                                <a className="link" href="/give" onClick={() => this.handleCloseMobile()}>Give</a>
                            </li>
                            <li>
                                <a className="link" href="/contact" onClick={() => this.handleCloseMobile()}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

}