import Toastify from "toastify-js";
import persianDate from "persian-date";
import changeLocation from "../module/location";
import {
    darkModeStyles,
    lightModeStyles,
    navbarBtnHandlerShow,
    navbarBtnHandlerHide,
  }from '../module/rootJs';
  const darkModeIconMoon = document.querySelector("#darkmode_icon");
  const navbarBackdrop = document.querySelector(".backdrop");
  const hamburgerNavbarBtn = document.querySelector(".hamburger_navbar");




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
  } else if (document.body.id === "false") {
    lightModeStyles();
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
