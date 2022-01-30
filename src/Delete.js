import Toastify from "toastify-js";
import persianDate from "persian-date";
import changeLocation from "../module/location";
import {
  darkModeStyles,
  lightModeStyles,
  navbarBtnHandlerShow,
  navbarBtnHandlerHide,
} from "../module/rootJs";

const darkModeIconMoon = document.querySelector("#darkmode_icon");
const aquariumBody = document.querySelector(".aquarium");
const navbarBackdrop = document.querySelector(".backdrop");
const hamburgerNavbarBtn = document.querySelector(".hamburger_navbar");
const getLocalStorageToJson = JSON.parse(localStorage.getItem("DeleteLocal"));
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

// after load page
// show card when we have done local storage
const showCardAfterLoad = () => {
  window.addEventListener("load", (e) => {
    if (getLocalStorageToJson) {
      cardContainer.style.flexDirection = "row";
      aquariumBody.style.display = "none";
      paragraphEmptyList.style.display = "none";

      if (getLocalStorageToJson.length >= 6) {
        const newDeleteLocal = getLocalStorageToJson.shift();
        localStorage.setItem(
          "DeleteLocal",
          JSON.stringify(getLocalStorageToJson)
        );
      }

      getLocalStorageToJson.forEach((item, index) => {
        cardContainer.innerHTML += `
         <div id='${item.id}' class="card card_anime">
         <div class="card-body">

         <div class="accordion accordion-flush" id="accordionFlushExample">
         <div class="accordion-item">
           <p class="accordion-header" id="flush-headingOne">
             <button class="accordion-button collapsed accordion_btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_${index}" aria-expanded="false" aria-controls="flush-collapseOne_${index}">
                Time Details
             </button>
           </p>
           <div id="flush-collapseOne_${index}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne_${index}" data-bs-parent="#accordionFlushExample">
             <div class="accordion-body">
             <p class="badge bg-primary bagde_time">create time</p>
              <p class="card-subtitle">${item.time}</p>
             <p class="badge bg-success bagde_time">delete time</p>
             <p class="card-subtitle">${item.deleteTime} </p></div>
           </div>
         </div>
            </div>

         <p class="card-text">
           ${item.text}
         </p>
         </div>
         <div class="card_footer">
           <img class="card_image_footer" src="../images/icons8-close.svg" />
         </div>
         </div> 

         `;
      });
    }
  });
};
showCardAfterLoad();
