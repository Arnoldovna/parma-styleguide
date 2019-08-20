document.addEventListener('DOMContentLoaded', (event) => {

  //
  // Site navigation toggle
  // ------------------------------------------------------------- //

  let $body = document.querySelector('body')

  document.querySelector('#js-nav-label').addEventListener('click', (e) => {
    e.target.classList.toggle('nav-label--is-active')
    $body.classList.toggle('is-scroll-locked')
  })

  //
  // Page header
  // ------------------------------------------------------------- //

  function pageHeaderIntersectionHandler(visible) {

    if(!window.matchMedia('(min-width: 32rem)').matches) return

    if(!visible) {
      document.querySelector('.page-nav').classList.add('page-nav--is-fixed');
    }
    else {
      document.querySelector('.page-nav').classList.remove('page-nav--is-fixed');
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
