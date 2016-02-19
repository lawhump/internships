function checkNav() {
  var hero_height = $('#hero').height();
  var $el = $('.nav');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > hero_height && !isPositionFixed){
    $('.nav').css({'position': 'fixed', 'top': '0px'});
    document.querySelector('.about').style.paddingTop = $el.height()+'px';
  }
  if ($(this).scrollTop() < hero_height && isPositionFixed) {
    $('.nav').css({'position': 'static', 'top': '0px'});
    document.querySelector('.about').style.paddingTop = '0';
  }
}

var scroll = function() {
  var top_of_roles = $('.roles').offset().top;
  var top_of_sessions = $('.sessions').offset().top;
  var bottom_of_window = $(window).scrollTop() + $(window).height();

  console.log('top_of_roles='+top_of_roles);
  console.log('bottom_of_window='+bottom_of_window);

  var margin = 170;
  // Hard coded. I know there's a more elegant way but we only have two days
  if (bottom_of_window > (top_of_roles+margin)) {
    $('.roles').addClass('is-animating');
  }

  if (bottom_of_window > (top_of_sessions+margin)) {
    $('.sessions').addClass('is-animating');
  }

  checkNav();
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
