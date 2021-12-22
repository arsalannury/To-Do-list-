import Toastify from "toastify-js";
import persianDate from "persian-date";
// import AOS from 'aos';
// AOS.init()
const darkModeIconMoon = document.querySelector("#darkmode_icon");
const darkModeIconSun = document.querySelector(".darkmode_icon_sun");
const modalContent = document.querySelector(".modal-content");
const modalBackdrop = document.getElementById("exampleModal");
const aquariumBody = document.querySelector(".aquarium");
const aquariumTable = document.querySelector(".aquarium__table");
const aquariumAquarium = document.querySelector(".aquarium__aquarium");
const navbarContainer = document.querySelector(".menu_container");
const navbarSvg = document.querySelectorAll(".navbar_svg path");
const navbarListItem = document.querySelectorAll(".menu_container ul li");
const navbarBackdrop = document.querySelector(".backdrop");
const hamburgerNavbarBtn = document.querySelector(".hamburger_navbar");
const paragraphEmptyList = document.querySelector(".nothing_to_do");
const cardContainer = document.querySelector(".card_container");
const addToDoBtn = document.querySelector(".add_todo_btn");
const addToDoInput = document.querySelector(".add_to_do_input");
const closeToDoBtn = document.querySelector(".close_todo_btn");
const iconCloseModal = document.querySelector(".icon_close_modal");
const mainModalToDo = document.querySelector(".main_modal_add_todo");
let homeLocalStorageArray = [];
const homeLocalToJson = JSON.parse(localStorage.getItem('homeLocal'))
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
  modalContent.style.backgroundColor = "#aaa";
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
  modalBackdrop.style.backgroundColor = "rgba(255,255,255,.20)";
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
  modalContent.style.backgroundColor = "#fff";
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
  modalBackdrop.style.backgroundColor = "unset";
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

// add todo to list event start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
addToDoBtn.addEventListener("click", (e) => {
  addToDo();
});

setInterval(() => {
  if (mainModalToDo.style.display === "none") {
    addToDoInput.value = "";
  }
}, 4000);

function addToDo() {
  if (!addToDoInput.value) {
    Toastify({
      text: "Oops ! add somthing to do",
      duration: 3000,
      position: "center",
      gravity: "bottom",
      style: {
        background: "#e5383b",
        color: "#fff",
      },
    }).showToast();
    return;
  }
  Toastify({
    text: "Do Somthing Great",
    duration: 3000,
    position: "center",
    gravity: "bottom",
    style: {
      background: "#38b000",
      color: "#fff",
    },
  }).showToast();
  paragraphEmptyList.style.display = "none";
  aquariumBody.style.display = "none";
  homeLocalFuntion();
  cardContainer.innerHTML += `
  <div class="card card_anime">
  <div class="card-body">
  <h6 class="card-subtitle mb-2">${new persianDate().format()}</h6>
  <p class="card-text">
    ${addToDoInput.value}
  </p>

  <div class='btn_card_container'>
  <button type="button" class="btn btn-outline-success card_btn_css">Done</button>
  <button type="button" class="btn btn-outline-danger card_btn_css">Delete</button>
  </div>

  </div>
  </div> 
  `;
  setTimeout(() => {
    document.querySelectorAll(".card").forEach((el) => {
      el.classList.remove("card_anime");
    });
  }, 3000);
  styleCardDarkOrLightMode();
  cardContainer.style.flexDirection = "row";
  addToDoInput.value = "";
}
// add todo to list event end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// when add card if darkmode was on
// card has darkmode styles
// and if light mode was on
// card has light mode style
function styleCardDarkOrLightMode() {
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

function homeLocalFuntion() {
  homeLocalStorageArray.push({
    time: new persianDate().format(),
    text: addToDoInput.value,
  });
  const newItemTodoLocal = localStorage.setItem(
    "homeLocal",
    JSON.stringify(homeLocalStorageArray)
  );
}
