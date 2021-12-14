import Toastify from "toastify-js";
import persianDate from "persian-date";


const darkModeIconMoon = document.querySelector('#darkmode_icon');
const darkModeIconSun = document.querySelector('.darkmode_icon_sun');
const hamburgerIcon = document.querySelector('.hamburger-inner');
const modalContent = document.querySelector('.modal-content');


// pesrian date show to navbar menu start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const datePersian = document.querySelector(".date_persian");
const updateTime = setInterval(() => {
  var innerTexDateElement = new persianDate().format().toString();
  datePersian.innerText = innerTexDateElement;
}, 1000);
// pesrian date show to navbar menu end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// dark Mode web page start |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
darkModeIconMoon.addEventListener('click',(e) => {
darkModeStyles();
})
function darkModeStyles(){
    document.body.style.backgroundColor = '#111';
    document.body.style.color = '#fff';
    darkModeIconMoon.className = 'bi bi-brightness-high darkmode_icon_sun';
    hamburgerIcon.style.backgroundColor = '#fff';
    modalContent.style.backgroundColor = '#aaa';
}
// dark Mode web page end |||||||||||||||||||||||||||||||||||||||||||||||||||||||||
