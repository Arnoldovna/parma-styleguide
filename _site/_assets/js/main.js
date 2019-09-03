document.addEventListener('DOMContentLoaded', (event) => {

  let gridVisible = false
  //
  // Animate Logo in
  // ------------------------------------------------------------- //

  const animateLogo = () => {
    let tlLogo = new TimelineMax()
    // tlLogo.staggerFrom('.letter', 10, { x: -300, opacity: 0 , ease: Elastic.easeOut }, .2)
    //       .fromTo('#claim', .3, { opacity: 0 }, { opacity: 1 })

    let commonAniParams = {
      ease: Back.easeOut.config(1.4),
      transformOrigin:"50% 0%"
    }

    tlLogo.set('.cell', { opacity: "0" })
          .set('.letter', { opacity: "0" })
          .set('#claim', { opacity: "0", y: '-15%' })
          .set('#letter--klammer--links', { x: "-90%" })
          .set('#letter--klammer--rechts', { x: "-310%" })
          .set('#letter--2', { x: "-205%" })
          .set('#letter--4', { x: "-180%" })
          .to('#letter--klammer--links', .5, { opacity: 1 }, .5, 'first')
          .to('#letter--klammer--rechts', .5, { opacity: 1 }, .5, 'first')
          .to('#letter--klammer--links', .5, { x: "-200%", ...commonAniParams }, 'second')
          .to('#letter--klammer--rechts', .5, { x: "-200%", ...commonAniParams }, 'second')
          .to('#letter--2', .5, { opacity: 1}, 'third')
          .to('#letter--4', .5, { opacity: 1}, 'third')
          .to('#letter--klammer--links', .5, { x: "0%", ...commonAniParams }, 'fourth')
          .to('#letter--klammer--rechts', .5, { x: "0%", ...commonAniParams }, 'fourth')
          .to('#letter--2', .5, { x: "0%", ...commonAniParams }, 'fourth')
          .to('#letter--4', .5, { x: "0%", ...commonAniParams }, 'fourth')
          .to('#letter--h', .5, { opacity: 1 }, 'fifth')
          .to('#letter--u', .5, { opacity: 1 }, 'fifth')
          .to('#letter--k', .5, { opacity: 1 }, 'fifth')
          .to('#letter--klammer--links', .5, { opacity: 0 }, 'sixth')
          .to('#claim', .5, { opacity: 1, y: "0%", ...commonAniParams }, 'sixth')
  }

  animateLogo();

  document.querySelectorAll('.js-toggle-page-bg').forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      $body.classList.remove(...$body.classList)
      if(e.target.dataset.class)
      {
        $body.classList.add(e.target.dataset.class)
      }
    })
  })

  document.querySelector('.js-toggle-grid').addEventListener('click', (e) => {
    e.preventDefault();

    if (gridVisible) {
      TweenMax.staggerTo('.cell', .02, { opacity: 0, ease: Power2.easeOut }, .002)
    }
    else {
      TweenMax.staggerTo('.cell', .02, { opacity: 1, ease: Power2.easeOut }, .002)
    }

    gridVisible = !gridVisible
  })


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
      el.previousElementSibling.classList.remove('page-nav__icon--is-active')
      if(i === index) {
        el.classList.add('page-nav__link--is-active')
        el.previousElementSibling.classList.add('page-nav__icon--is-active')
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
