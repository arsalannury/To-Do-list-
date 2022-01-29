import Toastify from "toastify-js";
import persianDate from "persian-date";
import changeLocation from "../module/location";
import {
  darkModeStyles,
  lightModeStyles,
  navbarBtnHandlerShow,
  navbarBtnHandlerHide,
  styleCardDarkOrLightMode,
} from "../module/rootJs";

const darkModeIconMoon = document.querySelector("#darkmode_icon");
const aquariumBody = document.querySelector(".aquarium");
const navbarBackdrop = document.querySelector(".backdrop");
const hamburgerNavbarBtn = document.querySelector(".hamburger_navbar");
const paragraphEmptyList = document.querySelector(".nothing_to_do");
const cardContainer = document.querySelector(".card_container");
const addToDoBtn = document.querySelector(".add_todo_btn");
const addToDoInput = document.querySelector(".add_to_do_input");
const mainModalToDo = document.querySelector(".main_modal_add_todo");
const search = document.querySelector(".search_container");
let homeLocalStorageArray = [];
let doneLocalStorageArray = [];
let delLocalStorageArray = [];

const homeLocalToJson = JSON.parse(localStorage.getItem("homeLocal"));
const doneLocalToJson = JSON.parse(localStorage.getItem("doneLocal"));
const delLocalToJson = JSON.parse(localStorage.getItem("DeleteLocal"));

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
  search.style.display = "block";
  pushToArraySetLocal();
  innerHtmlCard();
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

//  : : : : : : load page with local storage value start
window.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("homeLocal")
    ? (homeLocalStorageArray = homeLocalToJson)
    : (homeLocalStorageArray = []);
  localStorage.getItem("doneLocal")
    ? (doneLocalStorageArray = doneLocalToJson)
    : (doneLocalStorageArray = []);
  localStorage.getItem("DeleteLocal")
    ? (delLocalStorageArray = delLocalToJson)
    : (delLocalStorageArray = []);
  afterLoadShowCard();
});
//  : : : : : : load page with local storage value end

// functions to set and get local storage to show card in document |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function pushToArraySetLocal() {
  homeLocalStorageArray.push({
    time: new persianDate().format("dddd, DD MMMM YYYY, h:mm:ss a"),
    text: addToDoInput.value,
    id: Math.floor(Math.random() * 1000000),
    doneTime: "",
    deleteTime: "",
  });
  const newItemTodoLocal = localStorage.setItem(
    "homeLocal",
    JSON.stringify(homeLocalStorageArray)
  );
}

function innerHtmlCard() {
  if (localStorage.getItem("homeLocal")) {
    const sliceJson = JSON.parse(localStorage.getItem("homeLocal")).slice(
      JSON.parse(localStorage.getItem("homeLocal")).length - 1
    );
    sliceJson.forEach((cardContent, index) => {
      cardContainer.innerHTML += `
               <div id='${cardContent.id}' class="card card_anime">
               <div class="card-body">
               <p class="card-subtitle">${cardContent.time}</p>
               <p class="card-text">
                 ${cardContent.text}
               </p>
  
               <div class='btn_card_container'>
               <button type="button" class="btn done_btn btn-outline-success card_btn_css">Done</button>
               <button type="button" class="btn del_btn btn-outline-danger card_btn_css">Delete</button>
               </div>
  
               </div>
               </div> 
                     `;
    });
  }
  doneAndDeleteCardEvent(
    "doneLocal",
    ".done_btn",
    "Well Done",
    "#38b000",
    doneLocalStorageArray
  );
  doneAndDeleteCardEvent(
    "DeleteLocal",
    ".del_btn",
    "Item Deleted",
    "#d00000",
    delLocalStorageArray
  );
}

function afterLoadShowCard() {
  if (!localStorage.getItem("homeLocal")) return;
  if (localStorage.getItem("homeLocal").length <= 2) return;

  paragraphEmptyList.style.display = "none";
  aquariumBody.style.display = "none";
  search.style.display = "block";

  setTimeout(() => {
    document.querySelectorAll(".card").forEach((el) => {
      el.classList.remove("card_anime");
    });
  }, 3000);

  styleCardDarkOrLightMode();
  cardContainer.style.flexDirection = "row";
  addToDoInput.value = "";

  JSON.parse(localStorage.getItem("homeLocal")).forEach(
    (cardContent, index) => {
      cardContainer.innerHTML += `
    <div id=${cardContent.id} class="card">
    <div class="card-body">
    <p class="card-subtitle">${cardContent.time}</p>
    <p class="card-text">
      ${cardContent.text}
    </p>
  
    <div class='btn_card_container'>
    <button type="button" class="btn done_btn btn-outline-success card_btn_css">Done</button>
    <button type="button" class="btn del_btn btn-outline-danger card_btn_css">Delete</button>
    </div>
  
    </div>
    </div> 
    `;
    }
  );
  doneAndDeleteCardEvent(
    "doneLocal",
    ".done_btn",
    "Well Done",
    "#38b000",
    doneLocalStorageArray,
    doneTime
  );
  doneAndDeleteCardEvent(
    "DeleteLocal",
    ".del_btn",
    "Item Deleted",
    "#d00000",
    delLocalStorageArray,
    deleteTime
  );
}

function doneAndDeleteCardEvent(
  localName,
  elementEvent,
  textToastify,
  colorToatify,
  localArray,
  finall
) {
  //  set done/delete local after DONE/DELETE btn click
  document.querySelectorAll(elementEvent).forEach((btnElement) => {
    btnElement.addEventListener("click", (e) => {
      
      const finalyTime = JSON.parse(localStorage.getItem("homeLocal"));
      for (let change of finalyTime) {
        const result =
          localName === "doneLocal"
            ? (change.doneTime = new persianDate().format(
                "dddd, DD MMMM YYYY, h:mm:ss a"
              ))
            : (change.deleteTime = new persianDate().format(
                "dddd, DD MMMM YYYY, h:mm:ss a"
              ));
      }
      localStorage.setItem("homeLocal", JSON.stringify(finalyTime));

      const parseHomeLocal = JSON.parse(
        localStorage.getItem("homeLocal")
      ).filter(
        (item) =>
          item.id == e.target.parentElement.parentElement.parentElement.id
      );
      const resultFilter = parseHomeLocal[0];
      localArray.push(resultFilter);

      const doneLocalStorage = localStorage.setItem(
        localName,
        JSON.stringify(localArray)
      );

      const spliceHomeLocal = JSON.parse(
        localStorage.getItem("homeLocal")
      ).filter(
        (item) =>
          item.id != e.target.parentElement.parentElement.parentElement.id
      );
      localStorage.setItem("homeLocal", JSON.stringify(spliceHomeLocal));
      Toastify({
        text: textToastify,
        duration: 3000,
        position: "center",
        gravity: "bottom",
        style: {
          background: colorToatify,
          color: "#fff",
        },
      }).showToast();

      setTimeout(() => {
        location.reload();
      }, 500);
    });
  });
}

// search in card start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\

search.addEventListener("input", (e) => {
  document.querySelectorAll(".card .card-body .card-text").forEach((text) => {
    if (text.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      text.parentElement.parentElement.style.display = "flex";
    } else {
      text.parentElement.parentElement.style.display = "none";
    }
  });
});
