document.addEventListener('DOMContentLoaded', (event) => {

  let $body = document.querySelector('body')

  document.querySelector('#js-nav-label').addEventListener('click', (e) => {
    e.target.classList.toggle('nav-label--is-active')
    $body.classList.toggle('is-scroll-locked')
  })
})
