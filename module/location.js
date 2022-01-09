const changeLocation = () => {
    document.querySelector('.home_page').onclick = () => {
        location.href = './Home.html'
      }
      document.querySelector('.done_page').onclick = () => {
        location.href = './Done.html'
      }
}

export default changeLocation
