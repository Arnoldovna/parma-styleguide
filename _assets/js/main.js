document.addEventListener('DOMContentLoaded', (event) => {

  document.querySelector('#js-nav-label').addEventListener('click', (e) => {
    e.target.classList.toggle('nav-label--is-active');
  })

})
