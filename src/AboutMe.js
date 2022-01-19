import Toastify from "toastify-js";
import persianDate from "persian-date";
import changeLocation from "../module/location";
import fullpage from "fullpage.js";
import screenfull from 'screenfull';

import {
    darkModeStyles,
    lightModeStyles,
    navbarBtnHandlerShow,
    navbarBtnHandlerHide,
  }from '../module/rootJs';
  const darkModeIconMoon = document.querySelector("#darkmode_icon");
  const navbarBackdrop = document.querySelector(".backdrop");
  const hamburgerNavbarBtn = document.querySelector(".hamburger_navbar");
  const myImage = document.querySelector('#me');
  const containerAboutMe = document.querySelector('.container_about_me');
  const arrows = document.querySelectorAll('.arrows i');


changeLocation();
// pesrian date show to navbar menu start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const datePersian = document.querySelector(".date_persian");
const updateTime = setInterval(() => {
  var innerTexDateElement = new persianDate().format().toString();
  datePersian.innerText = innerTexDateElement;
}, 1000);
// pesrian date show to navbar menu end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// light and dark Mode web page start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
darkModeIconMoon.addEventListener("click", (e) => {
  if (document.body.id === "true") {
    darkModeStyles();
    aboutMeDarkLightMode('#fff','#fff')
  } else if (document.body.id === "false") {
    lightModeStyles();
    aboutMeDarkLightMode('#333','#000')
  }
});
// light and dark Mode web page end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// show and hide navbar start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
hamburgerNavbarBtn.addEventListener("click", (e) => {
  if (hamburgerNavbarBtn.id === "true") {
    navbarBtnHandlerShow();
  } else if (hamburgerNavbarBtn.id === "false") {
    navbarBtnHandlerHide();
  }
});

navbarBackdrop.addEventListener("click", (e) => {
  navbarBtnHandlerHide();
});
// show and hide navbar end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// new scroll model page with fullpage start |||||||||||||||||||||||||||||||||||||||||||
new fullpage('#fullpage', {
  licenseKey: '7yhihj7ht67hyh',
	scrollHorizontally: true,
  css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
  showActiveTooltip: true,
  keyboardScrolling: true,
  anchors:['start', 'end'],
});
fullpage_api.setAllowScrolling(true);
// new scroll model page with fullpage end |||||||||||||||||||||||||||||||||||||||||||







// click image and view full screen image start ||||||||||||||||||||||||||||||||||||
myImage.addEventListener('click', () => {
	if (screenfull.isEnabled) {
		screenfull.request(myImage);
	}
});
// click image and view full screen image end ||||||||||||||||||||||||||||||||||||


function aboutMeDarkLightMode(params) {
  containerAboutMe.style.color = params;
  arrows.forEach((arrow) => {
    arrow.style.color = '#fff';
  })
}