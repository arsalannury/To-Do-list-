const changeLocation = () => {
    document.querySelector('.home_page').onclick = () => {
        location.href = './Home.html'
      }
      document.querySelector('.done_page').onclick = () => {
        location.href = './Done.html'
      }
      document.querySelector('.delete_page').onclick = () => {
        location.href = './Delete.html'
      }
      document.querySelector('.about_me').onclick = () => {
        location.href = './aboutMe.html'
      }
}

export default changeLocation
