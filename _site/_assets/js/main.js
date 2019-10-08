"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// POLYFILLS
// ------------------------------------------------------------- //
// Array.from
if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
} // NodeList.forEach


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // CSS variables


if (typeof cssVars !== 'undefined') {
  cssVars();
} //
// On DOM loaded
// ------------------------------------------------------------- //


document.addEventListener('DOMContentLoaded', function (event) {
  // const pageNav = document.querySelector("#js-page-nav")
  var gridVisible = false;
  var safeZoneVisible = false;
  var claimVisible = true;
  var logoReduced = false;
  var commonAniParams = {
    ease: Back.easeOut.config(1.4),
    transformOrigin: "50% 0%"
  }; //
  // Animate Logo in
  // ------------------------------------------------------------- //

  var animateLogo = function animateLogo() {
    var tlLogo = new TimelineMax();
    tlLogo.set('.cell', {
      opacity: "0"
    }).set('.letter', {
      opacity: "0"
    }).set('#claim', {
      opacity: "0",
      y: '-15%'
    }).set('#letter--klammer--links', {
      x: "-90%"
    }).set('#letter--klammer--rechts', {
      x: "-310%"
    }).set('#letter--2', {
      x: "-205%"
    }).set('#letter--4', {
      x: "-180%"
    }).set('.color-switcher__item', {
      y: "20px",
      opacity: 0
    }).to('#letter--klammer--links', .5, {
      opacity: 1
    }, .5, 'first').to('#letter--klammer--rechts', .5, {
      opacity: 1
    }, .5, 'first').to('#letter--klammer--links', .5, _objectSpread({
      x: "-200%"
    }, commonAniParams), 'second').to('#letter--klammer--rechts', .5, _objectSpread({
      x: "-200%"
    }, commonAniParams), 'second').to('#letter--2', .5, {
      opacity: 1
    }, 'third').to('#letter--4', .5, {
      opacity: 1
    }, 'third').to('#letter--klammer--links', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--klammer--rechts', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--2', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--4', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--h', .5, {
      opacity: 1
    }, 'fifth').to('#letter--u', .5, {
      opacity: 1
    }, 'fifth').to('#letter--k', .5, {
      opacity: 1
    }, 'fifth').to('#letter--klammer--links', .5, {
      opacity: 0
    }, 'sixth').to('#claim', .5, _objectSpread({
      opacity: 1,
      y: "0%"
    }, commonAniParams), 'sixth').staggerTo('.color-switcher__item', .3, _objectSpread({
      opacity: 1,
      y: 0
    }, commonAniParams), .1, 'sixth');
  };

  animateLogo();
  document.querySelectorAll('.js-toggle-page-bg').forEach(function (link, i) {
    link.addEventListener('click', function (e) {
      var _$body$classList;

      e.preventDefault();

      (_$body$classList = $body.classList).remove.apply(_$body$classList, _toConsumableArray($body.classList));

      if (e.target.dataset["class"]) {
        $body.classList.add(e.target.dataset["class"]);
      }
    });
  });

  function showGrid() {
    TweenMax.staggerTo('.cell:not(.cell--safety)', .02, {
      opacity: 1,
      ease: Power2.easeOut
    }, .002);
    document.querySelector('.js-toggle-grid').classList.add('switcher__link--is-active');
    gridVisible = true;
  }

  function hideGrid() {
    TweenMax.staggerTo('.cell:not(.cell--safety)', .02, {
      opacity: 0,
      ease: Power2.easeOut
    }, .002);
    document.querySelector('.js-toggle-grid').classList.remove('switcher__link--is-active');
    gridVisible = false;
  }

  function showSafeZone() {
    TweenMax.staggerTo('.cell--safety', .1, {
      opacity: 1,
      ease: Power2.easeOut
    }, .02);
    document.querySelector('.js-toggle-safe-zone').classList.add('switcher__link--is-active');
    safeZoneVisible = true;
  }

  function hideSafeZone() {
    TweenMax.staggerTo('.cell--safety', .1, {
      opacity: 0,
      ease: Power2.easeOut
    }, .02);
    document.querySelector('.js-toggle-safe-zone').classList.remove('switcher__link--is-active');
    safeZoneVisible = false;
  }

  function showClaim() {
    TweenMax.to('.claim', .5, {
      y: 0,
      opacity: 1,
      ease: Power2.easeOut
    });
    document.querySelector('.js-toggle-claim').classList.add('switcher__link--is-active');
    claimVisible = true;
  }

  function hideClaim() {
    TweenMax.to('.claim', .5, {
      y: "-15%",
      opacity: 0,
      ease: Power2.easeOut
    });
    document.querySelector('.js-toggle-claim').classList.remove('switcher__link--is-active');
    claimVisible = false;
  }

  function expandLogo() {
    var tlLogo = new TimelineMax();
    tlLogo.to('#letter--klammer--links', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--klammer--rechts', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--2', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--4', .5, _objectSpread({
      x: "0%"
    }, commonAniParams), 'fourth').to('#letter--h', .5, {
      opacity: 1
    }, 'fifth').to('#letter--u', .5, {
      opacity: 1
    }, 'fifth').to('#letter--k', .5, {
      opacity: 1
    }, 'fifth').to('#letter--klammer--links', .5, {
      opacity: 0
    }, 'sixth');
    logoReduced = false;
    document.querySelector('.js-toggle-reduced').classList.remove('switcher__link--is-active');
    showClaim();
  }

  function reduceLogo() {
    hideClaim();
    hideGrid();
    hideSafeZone();
    var tlLogo = new TimelineMax();
    tlLogo.to('#letter--klammer--links', .5, {
      opacity: 1
    }, 'first').to('#letter--h', .5, {
      opacity: 0
    }, 'second').to('#letter--u', .5, {
      opacity: 0
    }, 'second').to('#letter--k', .5, {
      opacity: 0
    }, 'second').to('#letter--klammer--links', .5, _objectSpread({
      x: "-200%"
    }, commonAniParams), 'third').to('#letter--klammer--rechts', .5, _objectSpread({
      x: "-200%"
    }, commonAniParams), 'third').to('#letter--2', .5, _objectSpread({
      x: "-205%"
    }, commonAniParams), 'third').to('#letter--4', .5, _objectSpread({
      x: "-180%"
    }, commonAniParams), 'third');
    logoReduced = true;
    document.querySelector('.js-toggle-reduced').classList.add('switcher__link--is-active');
  }

  if (document.querySelector('.js-toggle-grid')) {
    document.querySelector('.js-toggle-grid').addEventListener('click', function (e) {
      e.preventDefault();
      if (logoReduced) expandLogo();
      if (safeZoneVisible) hideSafeZone();
      if (!claimVisible) showClaim();
      gridVisible ? hideGrid() : showGrid();
    });
  }

  if (document.querySelector('.js-toggle-safe-zone')) {
    document.querySelector('.js-toggle-safe-zone').addEventListener('click', function (e) {
      e.preventDefault();
      if (logoReduced) expandLogo();
      if (gridVisible) hideGrid();
      if (claimVisible) hideClaim();
      safeZoneVisible ? hideSafeZone() : showSafeZone();
    });
  }

  if (document.querySelector('.js-toggle-claim')) {
    document.querySelector('.js-toggle-claim').addEventListener('click', function (e) {
      e.preventDefault();

      if (!claimVisible) {
        logoReduced ? expandLogo() : showClaim();
      } else {
        hideClaim();
      }
    });
  }

  if (document.querySelector('.js-toggle-reduced')) {
    document.querySelector('.js-toggle-reduced').addEventListener('click', function (e) {
      e.preventDefault();
      logoReduced ? expandLogo() : reduceLogo();
    });
  } //
  // Site navigation toggle
  // ------------------------------------------------------------- //


  var $body = document.querySelector('body');
  var $navEls = document.querySelectorAll('.page-nav__link');
  var waypoints = [];
  document.querySelector('#js-nav-label').addEventListener('click', function (e) {
    e.target.classList.toggle('nav-label--is-active');
    toggleScrollLock($body);
  }); //
  // Page navigation
  // ------------------------------------------------------------- //
  // Attach menu toggle event listener

  if (document.querySelector('#js-page-nav__label')) {
    document.querySelector('#js-page-nav__label').addEventListener('click', function (e) {
      // if(document.querySelector('#js-page-nav__toggle').checked) {
      //   console.log('body locked')
      //   bodyScrollLock.disableBodyScroll(targetElement)
      // }
      // else {
      //   console.log('body unlocked')
      //   bodyScrollLock.enableBodyScroll(targetElement)
      // }
      // Add scroll lock to body
      toggleScrollLock($body);
    });
  } // Attach menu items event listeners


  document.querySelectorAll('.page-nav__link').forEach(function (link, i) {
    link.addEventListener('click', function (e) {
      // Temporarily disable Waypoint to avoid conflicts
      Waypoint.disableAll(); // Uncheck the checkbox in order to close the navigation
      // (affects mobile only)

      document.getElementById('js-page-nav__toggle').checked = false; // Set a scroll lock on the body element.

      setScrollLock($body, false); // Set the current active navigation element

      setActiveNavEl(i); // If page nav is not fixed, make it animatable

      var pageNav = document.querySelector('.page-nav');

      if (!document.querySelector('.page-nav--is-fixed')) {
        pageNav.classList.add('page-nav--is-top-animatable');
        pageNav.addEventListener('transitionend', transitionEndHandler);
      } // Wait briefly before enabling Waypoint again


      setTimeout(function () {
        Waypoint.enableAll();
      }, 66);
    });
  });

  function transitionEndHandler(e) {
    e.target.classList.remove('page-nav--is-top-animatable');
    e.target.removeEventListener('transitionend', transitionEndHandler);
  } // TODO: fix this for iOS where it still doesn't work


  function setScrollLock(target, setLock) {
    if (setLock) {
      target.classList.add('l-scroll-lock'); // document.querySelector('body').ontouchstart = (e) => { e.preventDefault() }
    } else {
      target.classList.remove('l-scroll-lock');
    }
  }

  function toggleScrollLock(target) {
    // document.querySelector('body').ontouchstart = (e) => { e.preventDefault() }
    target.classList.toggle('l-scroll-lock');
  }

  function setActiveNavEl(index, section) {
    $navEls.forEach(function (el, i) {
      var subnavWrapper = el.parentNode.querySelector('.subnav-wrapper'); // console.log(el.parentNode.querySelector('.page-subnav').offsetHeight)
      // Remove active classes from every element

      el.classList.remove('page-nav__link--is-active');
      el.previousElementSibling.classList.remove('page-nav__icon--is-active'); // if loop indices don't match and subnav exists collapse the subnav

      if (i !== index && subnavWrapper) {
        subnavWrapper.style.height = 0;
      } // If the passed index equals the current loop index
      // we have the currenylt active element and need to set the active classes


      if (i === index) {
        el.classList.add('page-nav__link--is-active');
        el.previousElementSibling.classList.add('page-nav__icon--is-active'); // If a subnav exists, expand it

        if (subnavWrapper) {
          subnavWrapper.style.height = subnavWrapper.querySelector('.page-subnav').offsetHeight + "px";
        }
      }
    }); // Update the label content that reflects
    // the currently active section on mobile

    var theSection = section || document.querySelectorAll('.waypoint').item(index);
    document.getElementById('js-page-nav__label__content').textContent = theSection.dataset.title;
  }

  if ((typeof Waypoint === "undefined" ? "undefined" : _typeof(Waypoint)) !== undefined) {
    var sections = document.querySelectorAll('.waypoint');
    sections.forEach(function (section, index) {
      waypoints.push(new Waypoint({
        element: section,
        handler: function handler(direction) {
          setActiveNavEl(index, section);
        },
        offset: 48
      }));
    });
  } //
  // Page header
  // ------------------------------------------------------------- //


  function pageHeaderIntersectionHandler(visible) {
    if (!document.querySelector('.l-sidebar')) return;

    if (!visible) {
      document.querySelector('.l-sidebar').classList.add('page-nav--is-fixed');
    } else {
      document.querySelector('.l-sidebar').classList.remove('page-nav--is-fixed');
    }
  } //
  // Intersection observer
  // ------------------------------------------------------------- //


  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var entry = _step.value;
          // Toggle class if intersects
          entry.target.classList.toggle('in-view', entry.isIntersecting); // console.log(entry.target)
          // console.log(`${entry.target.id} is in view: ${entry.isIntersecting}`)
          // Handle page header intersection

          if (entry.target.classList.contains('page-header')) {
            pageHeaderIntersectionHandler(entry.isIntersecting);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    if (document.querySelector('.js-io')) {
      document.querySelectorAll('.js-io').forEach(function (el) {
        io.observe(el);
      });
    }
  }

  var wireframesSVG = document.querySelector('#js-wireframes svg');

  if (document.querySelector('.js-switcher')) {
    document.querySelectorAll('.js-switcher').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault(); // Remove active class from all switcher links

        document.querySelectorAll('.js-switcher').forEach(function (link) {
          link.classList.remove('switcher__link--is-active');
        }); // Add active class to current switcher link

        e.target.classList.add('switcher__link--is-active');
        var tl = new TimelineMax();
        tl.to(wireframesSVG, .15, {
          opacity: 0,
          y: '20px'
        }).set(wireframesSVG, {
          marginLeft: e.target.dataset.offset
        }).to(wireframesSVG, .15, {
          opacity: 1,
          y: '0px'
        });
      });
    });
  }

  if (document.querySelector('.product-img')) {
    var pics = document.querySelectorAll('.product-img');
    var master = Array.from(pics).reduce(function (tl, pic, i) {
      var start = !i ? 0 : "-=0.3";
      return tl.fromTo(pic, .3, {
        autoAlpha: 0,
        x: '-110%',
        y: '-50%'
      }, {
        autoAlpha: 1,
        x: '-40%'
      }, start).to(pic, 4, {
        x: '-30%',
        y: '-50%',
        ease: Linear.easeNone
      }).to(pic, .3, {
        autoAlpha: 0,
        x: '30%',
        y: '-50%'
      });
    }, new TimelineMax());
    master.repeat(-1);
  }
});