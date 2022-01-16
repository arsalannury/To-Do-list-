import Toastify from "toastify-js";
const modalContent = document.querySelector(".modal-content");
const modalBackdrop = document.getElementById("exampleModal");
const aquariumTable = document.querySelector(".aquarium__table");
const aquariumBody = document.querySelector(".aquarium");
const aquariumAquarium = document.querySelector(".aquarium__aquarium");
const navbarContainer = document.querySelector(".menu_container");
const hamburgerNavbarBtn = document.querySelector(".hamburger_navbar");
const navbarBackdrop = document.querySelector(".backdrop");
const darkModeIconMoon = document.querySelector("#darkmode_icon");
const navbarSvg = document.querySelectorAll(".navbar_svg path");
const navbarListItem = document.querySelectorAll(".menu_container ul li");
const datePersian = document.querySelector(".date_persian");

// light and dark Mode web page start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

export function darkModeStyles() {
  Toastify({
    text: "Dark mode",
    position: "center",
    duration: 3000,
    style: {
      backgroundImage: "unset",
      backgroundColor: "#fff",
      color: "#111",
    },
  }).showToast();
  document.body.style.backgroundColor = "#111";
  datePersian.style.color = "#fff";
  darkModeIconMoon.className = "bi bi-brightness-high darkmode_icon_sun";
  if(modalContent){
    modalContent.style.backgroundColor = "#aaa";
  }
  if(aquariumBody){
    aquariumBody.style.backgroundColor = "#111";
    aquariumTable.style.backgroundColor = "#fff";
    aquariumAquarium.style.borderColor = "#fff";
  }
  if (document.querySelector(".card")) {
    document
      .querySelectorAll(".card-subtitle")
      .forEach((subtitle) => (subtitle.style.color = "#fff"));
    document
      .querySelectorAll(".card-text")
      .forEach((cardText) => (cardText.style.color = "#fff"));
    document
      .querySelectorAll(".card")
      .forEach((bgColor) => (bgColor.style.backgroundColor = "#333"));
    document
      .querySelectorAll(".card")
      .forEach((borderColor) => (borderColor.style.border = "1px solid #fff"));
  }
  navbarSvg.forEach((svg) => {
    svg.style.fill = "#fff";
  });
  navbarContainer.style.boxShadow = "0 0 10px #eee";
  navbarContainer.style.backgroundColor = "#111";
  if(modalContent){
    modalBackdrop.style.backgroundColor = "rgba(255,255,255,.20)";
  }
  navbarBackdrop.style.backgroundColor = "rgba(255,255,255,.20)";
  navbarListItem.forEach((item) => {
    item.style.color = "rgba(255,255,255,.5)";
  });
  document.body.id = "false";
}

export function lightModeStyles() {
  Toastify({
    text: "Light mode",
    position: "center",
    duration: 3000,
  }).showToast();
  document.body.style.backgroundColor = "#fff";
  datePersian.style.color = "#000";
  darkModeIconMoon.className = "bi bi-moon darkmode_icon";
  if(modalContent){
    modalContent.style.backgroundColor = "#fff";
  }
  if(aquariumBody){
    aquariumBody.style.backgroundColor = "#fff";
    aquariumTable.style.backgroundColor = "#000";
    aquariumAquarium.style.borderColor = "#000";
  }
  if (document.querySelector(".card")) {
    document
      .querySelectorAll(".card-subtitle")
      .forEach((subtitle) => (subtitle.style.color = "#000"));
    document
      .querySelectorAll(".card-text")
      .forEach((cardText) => (cardText.style.color = "#000"));
    document
      .querySelectorAll(".card")
      .forEach((bgColor) => (bgColor.style.backgroundColor = "#fff"));
    document
      .querySelectorAll(".card")
      .forEach(
        (colorBorder) =>
          (colorBorder.style.border = "1px solid rgba(0,0,0,.125)")
      );
  }
  navbarSvg.forEach((svg) => {
    svg.style.fill = "#0099ff";
  });
  navbarContainer.style.boxShadow = "0 0 10px #333";
  navbarContainer.style.backgroundColor = "#fff";
  if(modalContent){
      modalBackdrop.style.backgroundColor = "unset";
  }
  navbarBackdrop.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  navbarListItem.forEach((item) => {
    item.style.color = "#0000";
  });
  document.body.id = "true";
}
// light Mode and dark mode web page end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// show and hide navbar start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||


export function navbarBtnHandlerShow() {
  hamburgerNavbarBtn.classList.add("is-active");
  navbarContainer.style.transform = "translateX(0)";
  navbarBackdrop.style.display = "unset";
  hamburgerNavbarBtn.id = "false";
}

export function navbarBtnHandlerHide() {
  hamburgerNavbarBtn.classList.remove("is-active");
  navbarContainer.style.transform = "translateX(-300px)";
  navbarBackdrop.style.display = "none";
  hamburgerNavbarBtn.id = "true";
}
// show and hide navbar end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// when add card ,if darkmode was on
// card has darkmode styles
// and if light mode was on
// card has light mode styles
export function styleCardDarkOrLightMode() {
    if (document.body.id === "true") {
      document
        .querySelectorAll(".card-subtitle")
        .forEach((subtitle) => (subtitle.style.color = "#000"));
      document
        .querySelectorAll(".card-text")
        .forEach((cardText) => (cardText.style.color = "#000"));
      document
        .querySelectorAll(".card")
        .forEach((bgColor) => (bgColor.style.backgroundColor = "#fff"));
      document
        .querySelectorAll(".card")
        .forEach(
          (colorBorder) =>
            (colorBorder.style.border = "1px solid rgba(0,0,0,.125)")
        );
    } else if (document.body.id === "false") {
      document
        .querySelectorAll(".card-subtitle")
        .forEach((subtitle) => (subtitle.style.color = "#fff"));
      document
        .querySelectorAll(".card-text")
        .forEach((cardText) => (cardText.style.color = "#fff"));
      document
        .querySelectorAll(".card")
        .forEach((bgColor) => (bgColor.style.backgroundColor = "#333"));
      document
        .querySelectorAll(".card")
        .forEach((borderColor) => (borderColor.style.border = "1px solid #fff"));
    }
  }
