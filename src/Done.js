import Toastify from "toastify-js";
import persianDate from "persian-date";
import changeLocation from "../module/location";

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

function darkModeStyles() {
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
  document.body.style.color = "#fff";
  darkModeIconMoon.className = "bi bi-brightness-high darkmode_icon_sun";
  aquariumBody.style.backgroundColor = "#111";
  aquariumTable.style.backgroundColor = "#fff";
  aquariumAquarium.style.borderColor = "#fff";
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
  navbarBackdrop.style.backgroundColor = "rgba(255,255,255,.20)";
  navbarListItem.forEach((item) => {
    item.style.color = "rgba(255,255,255,.5)";
  });
  document.body.id = "false";
}

function lightModeStyles() {
  Toastify({
    text: "Light mode",
    position: "center",
    duration: 3000,
  }).showToast();
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "unset";
  darkModeIconMoon.className = "bi bi-moon darkmode_icon";
  aquariumBody.style.backgroundColor = "#fff";
  aquariumTable.style.backgroundColor = "#000";
  aquariumAquarium.style.borderColor = "#000";
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
  navbarBackdrop.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  navbarListItem.forEach((item) => {
    item.style.color = "#0000";
  });
  document.body.id = "true";
}
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

function navbarBtnHandlerShow() {
  hamburgerNavbarBtn.classList.add("is-active");
  navbarContainer.style.transform = "translateX(0)";
  navbarBackdrop.style.display = "unset";
  hamburgerNavbarBtn.id = "false";
}

function navbarBtnHandlerHide() {
  hamburgerNavbarBtn.classList.remove("is-active");
  navbarContainer.style.transform = "translateX(-300px)";
  navbarBackdrop.style.display = "none";
  hamburgerNavbarBtn.id = "true";
}
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
