$(document).foundation();

$(document).ready(function() {
  // var $element = $('#example');
  // var elem = new Foundation.Magellan($element);
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
