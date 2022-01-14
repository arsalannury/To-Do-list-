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
const aquariumBody = document.querySelector(".aquarium");
const aquariumTable = document.querySelector(".aquarium__table");
const aquariumAquarium = document.querySelector(".aquarium__aquarium");
const navbarContainer = document.querySelector(".menu_container");
const navbarSvg = document.querySelectorAll(".navbar_svg path");
const navbarListItem = document.querySelectorAll(".menu_container ul li");
const navbarBackdrop = document.querySelector(".backdrop");
const hamburgerNavbarBtn = document.querySelector(".hamburger_navbar");
const getLocalStorageToJson = JSON.parse(localStorage.getItem("doneLocal"));
const cardContainer = document.querySelector(".card_container");
const paragraphEmptyList = document.querySelector(".nothing_to_do");

changeLocation();


// light and dark Mode web page start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

darkModeIconMoon.addEventListener("click", (e) => {
  if (document.body.id === "true") {
    darkModeStyles();
  } else if (document.body.id === "false") {
    lightModeStyles();
  }
});


// light Mode and dark mode web page end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

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



// after load page
// show card when we have done local storage
const showCardAfterLoad = () => {
  window.addEventListener("load", (e) => {
    if (getLocalStorageToJson) {
      cardContainer.style.flexDirection = "row";
      aquariumBody.style.display = "none";
      paragraphEmptyList.style.display = "none";

      if (getLocalStorageToJson.length >= 6) {
        const newDoneLocal = getLocalStorageToJson.shift();
        localStorage.setItem(
          "doneLocal",
          JSON.stringify(getLocalStorageToJson)
        );
      }

      getLocalStorageToJson.forEach((item, index) => {
        cardContainer.innerHTML += `
         <div id='${item.id}' class="card card_anime">
         <div class="card-body">
         <p class="card-subtitle">${item.time}</p>
         <p class="card-text">
           ${item.text}
         </p>
         </div>
         <div class="card_footer">
           <img class="card_image_footer" src="../images/icons8-ok.svg" />
         </div>
         </div> 

         `;
      });
    }
  });
};
showCardAfterLoad();
