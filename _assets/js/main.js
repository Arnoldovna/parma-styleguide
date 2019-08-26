document.addEventListener('DOMContentLoaded', (event) => {

  //
  // Site navigation toggle
  // ------------------------------------------------------------- //

  let $body = document.querySelector('body')
  let $navEls = document.querySelectorAll('.page-nav__link')
  let waypoints = []

  document.querySelector('#js-nav-label').addEventListener('click', (e) => {
    e.target.classList.toggle('nav-label--is-active')
    toggleScrollLock($body)
  })

  document.querySelector('#js-page-nav__label').addEventListener('click', (e) => {
    toggleScrollLock($body)
  })

  document.querySelectorAll('.page-nav__link').forEach((link, i) => {
    link.addEventListener('click', (e) => {
      Waypoint.disableAll()
      document.getElementById('js-page-nav__toggle').checked = false
      toggleScrollLock($body)
      setActiveNavEl(i)
      setTimeout(() => {
        Waypoint.enableAll()
      }, 66)
    })
  })

  function toggleScrollLock(target) {
    target.classList.toggle('l-scroll-lock')
  }

  function setActiveNavEl(index, section) {
    $navEls.forEach((el, i) => {
      el.classList.remove('page-nav__link--is-active')
      if(i === index) {
        el.classList.add('page-nav__link--is-active')
      }
    })

    let theSection =  section || document.querySelectorAll('.waypoint').item(index)
    document.getElementById('js-page-nav__label__content').textContent = theSection.dataset.title
  }

  if(Waypoint) {
    let sections = document.querySelectorAll('.waypoint')

    sections.forEach((section, index) => {
      waypoints.push(new Waypoint({
        element: section,
        handler: (direction) => {
          setActiveNavEl(index, section)
        },
        offset: 48
      }))
    })
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
      // console.log(`${entry.target.id} is in view: ${entry.isIntersecting}`)

      // Handle page header intersection
      if (entry.target.classList.contains('page-header')) {
        pageHeaderIntersectionHandler(entry.isIntersecting)
      }
    }
  })

  document.querySelectorAll('.js-io').forEach(el => { io.observe(el) })
})
