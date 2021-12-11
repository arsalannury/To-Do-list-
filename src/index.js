// import Toastify from 'toastify-js'
// import Darkmode from 'darkmode-js';
import  persianDate  from 'persian-date';
// const options = {
//     bottom: '30px', 
//     right: '30px', 
//     left: 'unset', 
//     time: '1s',
//     mixColor: '#fff', 
//     backgroundColor: '#fff',  
//     buttonColorDark: '#100f2c', 
//     buttonColorLight: '#fff', 
//     saveInCookies: false, 
//     label: '🌓',
//     autoMatchOsTheme: true ,
//     cursor: 'pointer',
//   }
//   const darkmode =  new Darkmode(options);
// darkmode.showWidget()
// const date = new persianDate().format()
// console.log(date)
const datePersian = document.querySelector('.date_persian');

const updateTime = setInterval(()=> {
 var innerTexDateElement = new persianDate().format().toString();
 datePersian.innerText =  innerTexDateElement
},1000)
