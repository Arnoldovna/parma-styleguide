document.addEventListener('DOMContentLoaded', (event) => {

  //
  // Site navigation toggle
  // ------------------------------------------------------------- //

  let $body = document.querySelector('body')

  document.querySelector('#js-nav-label').addEventListener('click', (e) => {
    e.target.classList.toggle('nav-label--is-active')
    toggleScrollLock($body)
  })

  document.querySelector('#js-page-nav__label').addEventListener('click', (e) => {
    toggleScrollLock($body)
  })

  function toggleScrollLock(target) {
    target.classList.toggle('l-scroll-lock')
  }

  //
  // Page header
  // ------------------------------------------------------------- //

  function pageHeaderIntersectionHandler(visible) {

    // if(!window.matchMedia('(min-width: 32rem)').matches) return

    if(!visible) {
      document.querySelector('.l-sidebar').classList.add('page-nav--is-fixed');
    }
    else {
      document.querySelector('.l-sidebar').classList.remove('page-nav--is-fixed');
    }
  }

  //
  // Intersection observer
  // ------------------------------------------------------------- //

  const io = new IntersectionObserver(entries => {
    for (const entry of entries) {
      // Toggle class if intersects
      entry.target.classList.toggle('in-view', entry.isIntersecting)
      console.log(`${entry.target.id} is in view: ${entry.isIntersecting}`)

      // Handle page header intersection
      if (entry.target.classList.contains('page-header')) {
        pageHeaderIntersectionHandler(entry.isIntersecting)
      }
    }
  })

  document.querySelectorAll('.js-io').forEach(el => { io.observe(el) })
})
