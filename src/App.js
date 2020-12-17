import React from 'react';
import Routes from './routes';
import $ from 'jquery';
import menuBlack from './assets/img/menuBlack.png';
import menu from './assets/img/menu.png';

export default ()=>(
    <Routes />
);

$(document).ready(function () {
    var url = window.location.href;
    var res = url.split("/");
    var screenWidth = $(window).width();
    if(res.includes('give') || res.includes('contact')){
        if (screenWidth <= 1024) {
            $("#menu").attr("style", "color:black");
            $(".menuImg").attr("src", menuBlack);
        }
    }
});
$( window ).resize(function() {
    var url = window.location.href;
    var res = url.split("/");
    var screenWidth = $(window).width();
    if(res.includes('give') || res.includes('contact')){
        if (screenWidth <= 1024) {
            $("#menu").attr("style", "color:black");
            $(".menuImg").attr("src", menuBlack);
        }else{
            $("#menu").attr("style", "color:white");
            $(".menuImg").attr("src", menu);
        }
    }
});