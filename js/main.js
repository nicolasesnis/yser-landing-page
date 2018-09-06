(function($) {

  "use strict";

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /*
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    });

    $(window).on('load', function() {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    // Slick Nav
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'span',
      allowParentLinks: true,
      duplicate: false,
      label: '',
    });


/*
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });

/*
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

/*
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall: [1024, 2],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/*
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/*
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


  /*
   SMOOTH SCROLL
   ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

/*
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* Nivo Lightbox
  ========================================================*/
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

/*
   Page Loader
   ========================================================================== */
  $('#loader').fadeOut();

}(jQuery));

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// owl carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
  {
    items : 4,
    itemsDesktop : [1999,3],
    itemsDesktopSmall : [991,2],
    itemsMobile : [527,1]


  });
});



// direction aware 3D hover effect

const xnodes = [].slice.call(document.querySelectorAll('li'), 0);
const xdirections  = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const xclassNames = ['in', 'out'].map((p) => Object.values(xdirections).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = (l - (width/2) * (width > height ? (height/width) : 1));
  const y = (t - (height/2) * (height > width ? (width/height) : 1));
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
}

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
  }

  update(ev, prefix) {
    this.element.classList.remove(...xclassNames);
    this.element.classList.add(`${prefix}-${xdirections[getDirectionKey(ev, this.element)]}`);
  }
}

xnodes.forEach(node => new Item(node));

// navbar toggle

$('ul.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// method-audit

var Expand = (function() {
  var tile = $('.strips__strip');
  var tileLink = $('.strips__strip > .strip__content');
  var tileText = tileLink.find('.strip__inner-text');
  var stripClose = $('.strip__close');
  var stripNext = $('.strip__next');
  var stripPrevious = $('.strip__previous');

  var expanded  = false;

  var open = function() {

    var tile = $(this).parent();
    var tileNext = $(this).parent().next();
    var tilePrevious = $(this).parent().prev();

    if (!expanded) {
      tile.addClass('strips__strip--expanded');
      // add delay to inner text
      tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
      stripClose.addClass('strip__close--show');
      stripClose.css('transition', 'all .6s .1s cubic-bezier(0.23, 1, 0.32, 1)');

      stripNext.addClass('strip__next--show');
      stripNext.css('transition', 'all .6s .1s cubic-bezier(0.23, 1, 0.32, 1)');

      stripPrevious.addClass('strip__previous--show');
      stripPrevious.css('transition', 'all .6s .1s cubic-bezier(0.23, 1, 0.32, 1)');

      expanded = true;
    }
  };

  var close = function() {

    if (expanded) {
      tile.removeClass('strips__strip--expanded');
      // remove delay from inner text
      tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
      stripClose.removeClass('strip__close--show');
      stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)');
      stripNext.removeClass('strip__next--show');
      stripNext.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)');
      stripPrevious.removeClass('strip__previous--show');
      stripPrevious.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)');
      expanded = false;
    }
  }

  var next = function() {

    var tileNext = $(this).parent().next();

    if (expanded) {
      tile.removeClass('strips__strip--expanded');
      // remove delay from inner text
      stripClose.removeClass('strip__close--show');
      stripNext.removeClass('strip__next--show');
      stripPrevious.removeClass('strip__previous--show');
      expanded = false;

      tileNext.addClass('strips__strip--expanded');
      // add delay to inner text
      stripClose.addClass('strip__close--show');
      stripNext.addClass('strip__next--show');
      stripPrevious.addClass('strip__previous--show');

      expanded = true;
    }
  }

  var previous = function() {

    var tilePrevious = $(this).parent().prev();
    console.log(tilePrevious);

    if (expanded) {

      tile.removeClass('strips__strip--expanded');
      // remove delay from inner text
      stripClose.removeClass('strip__close--show');
      stripNext.removeClass('strip__next--show');
      stripPrevious.removeClass('strip__previous--show');
      expanded = false;

      tilePrevious.addClass('strips__strip--expanded');
      // add delay to inner text
      stripClose.addClass('strip__close--show');
      stripNext.addClass('strip__next--show');
      stripPrevious.addClass('strip__previous--show');

      expanded = true;
    }
  }

    var bindActions = function() {
      tileLink.on('click', open);
      stripClose.on('click', close);
      stripNext.on('click', next);
      stripPrevious.on('click', previous);
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

Expand.init();


// Grappin

var animation = anime.timeline({
  loop: true
});

animation.add([
  {
    targets: '#arm',
    translateX: '63%',
    duration: 2000,
    direction: 'right',
    easing: 'easeInOutQuad',
    offset: 0
   }, {
     duration:1000,
     targets: '.claw-1',
     rotate:"45deg",
     delay: 150,
     easing: 'easeInOutQuad',
     offset: 2000
   }, {
     duration:1000,
     targets: '.wrapper-claw-1',
     top:"110px",
     delay: 150,
     easing: 'easeInOutQuad',
     offset: 2000
    }, {
      duration:1000,
      targets: '.claw-2',
      rotate:"-45deg",
      delay: 150,
      easing: 'easeInOutQuad',
      offset: 2000
    }, {
      duration:1000,
      targets: '.wrapper-claw-2',
      top:"110px",
      delay: 150,
      easing: 'easeInOutQuad',
      offset: 2000
    }, {
      duration:1000,
      targets: '.claw-3',
      rotate:"50deg",
      delay: 150,
      easing: 'easeInOutQuad',
      offset: 2000
    }, {
      duration:1000,
      targets: '.wrapper-claw-3',
      top:"135px",
      left:"68px",
      delay: 150,
      easing: 'easeInOutQuad',
      offset: 2000
    }, {
      duration:1000,
      targets: '.claw-4',
      rotate:"-50deg",
      delay: 150,
      easing: 'easeInOutQuad',
      offset: 2000
    }, {
      duration:1000,
      targets: '.wrapper-claw-4',
      top:"135px",
      left:"151px",
      delay: 150,
      easing: 'easeInOutQuad',
      offset: 2000,
    }, {
      duration:1000,
      targets: '.data',
      translateY:"35vh",
      direction:'down',
      delay: 150,
      easing: 'easeInOutQuad',
      offset: 2100,
    }, {
      duration:2000,
      targets: '.data',
      opacity:"0",
      offset: 3100,
    }, {
      targets: '#arm',
      duration: 2000,
      left:'100rem',
      easing: 'easeInOutQuad',
      offset: 4000,
    }
]);


// typed.js
var typed = new Typed('#typed', {
  strings: [
     "mesdonnées.fr"
  ],
  typeSpeed: 100,
  loop: false
});
