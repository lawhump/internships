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

  var shuffleTimer = setTimeout(shuffle, 3500);

  function shuffle() {
  	sliderTop.goToSlide(Math.floor(Math.random() * 9));
  	sliderBot.goToSlide(Math.floor(Math.random() * 9));
  };

  function resetTimer() {
      clearTimeout(shuffleTimer);
      shuffleTimer = setTimeout(shuffle, 3500);
  };

  $('.shuffle').on('click', shuffle);
});

$(window).scroll(scroll);


// clickable roles buttons in the form

$('.role-names').click(function(){
    $(this).toggleClass('active-role');
  });

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - $('.nav').height()
      }, 400);
      return false;
    }
  }
});
