$(document).foundation();

$(document).ready(function() {
  // var $element = $('#example');
  // var elem = new Foundation.Magellan($element);

  $('#hero').twentytwenty({
  	default_offset_pct: 0
  });

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

$(window).scroll(function(){
  var bottom_of_nav = $('.nav').offset().top + $(this).outerHeight();
  var bottom_of_roles = $('.roles').offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height();

  if (bottom_of_window > bottom_of_roles) {
    $('.roles > div').each(function(i) {
      $(this).animate({'opacity':'1'},500);
    });
  }

  // if (bottom_of_window > bottom_of_nav) {
  //   $('.nav').addClass('fixed');
  // }
});
