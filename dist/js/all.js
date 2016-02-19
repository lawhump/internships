var scroll = function() {
  var bottom_of_nav = $('.nav').offset().top + $(this).outerHeight();
  var bottom_of_roles = $('.roles').offset().top + $(this).outerHeight();
  var bottom_of_sessions = $('.sessions').offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height();

  // console.log('bottom_of_roles='+bottom_of_sessions);
  // console.log('bottom_of_window='+bottom_of_window);

  // Hard coded. I know there's a more elegant way but we only have two days
  if (bottom_of_window > 3600) {
    $('.roles').addClass('is-animating');
  }

  if (bottom_of_window > 3000) {
    $('.sessions').addClass('is-animating');
  }

  var hero_height = $('#hero').height();
  var $el = $('.nav');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > hero_height && !isPositionFixed){
    $('.nav').css({'position': 'fixed', 'top': '0px'});
    document.querySelector('.about').style.paddingTop = '75px'
  }
  if ($(this).scrollTop() < hero_height && isPositionFixed) {
    $('.nav').css({'position': 'static', 'top': '0px'});
    document.querySelector('.about').style.paddingTop = '0'
  }

};

$(document).foundation();

$(document).ready(function() {
  // var $element = $('#example');
  // var elem = new Foundation.Magellan($element);

  scroll();

  $('#hero-slider').twentytwenty({
  	default_offset_pct: .5
  });

  document.getElementById("hero-vid").play();

  var sliderSettings = {
  	item: 4,
  	loop: true,
  	controls: false,
  	pager: false,
      onBeforeSlide: resetTimer,
  	responsive: [
  		{
              breakpoint:1200,
              settings: {
                  item:3
              }
          },
          {
              breakpoint:850,
              settings: {
                  item:2
              }
          },
          {
              breakpoint:500,
              settings: {
                  item:1
            	}
          }
  	]
  }

  var sliderTop = $('#top-slider').lightSlider(sliderSettings);
  var sliderBot = $('#bottom-slider').lightSlider(sliderSettings);

  var shuffleTimer = setTimeout(shuffle, 4000);

  var shuffle = function() {
  	sliderTop.goToSlide(Math.floor(Math.random() * 9));
  	sliderBot.goToSlide(Math.floor(Math.random() * 9));
  };

  var resetTimer = function() {
      clearTimeout(shuffleTimer);
      shuffleTimer = setTimeout(shuffle, 4000);
  };

  $('.shuffle').on('click', shuffle);
});

$(window).scroll(scroll);
