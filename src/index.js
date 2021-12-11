import Toastify from 'toastify-js'
import Darkmode from 'darkmode-js';

const options = {
    bottom: '30px', 
    right: '30px', 
    left: 'unset', 
    time: '1s',
    mixColor: '#fff', 
    backgroundColor: '#fff',  
    buttonColorDark: '#100f2c', 
    buttonColorLight: '#fff', 
    saveInCookies: false, 
    label: '🌓',
    autoMatchOsTheme: true ,
    cursor: 'pointer',
  }
  const darkmode =  new Darkmode(options);
darkmode.showWidget()