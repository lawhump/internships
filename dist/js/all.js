$(document).foundation();

var sliderSettings = {
	item: 4,
	loop: true,
	controls: false,
	pager: false,
    onBeforeSlide: resetTimer,
	responsive: [
		{
            breakpoint:1100,
            settings: {
                item:2
            }
        },
        {
            breakpoint:600,
            settings: {
                item:1
          	}	
        }
	]
}

var sliderTop = $('#top-slider').lightSlider(sliderSettings);
var sliderBot = $('#bottom-slider').lightSlider(sliderSettings);

var shuffleTimer = setTimeout(shuffle, 3000);

function shuffle() {
	sliderTop.goToSlide(Math.floor(Math.random() * 9));
	sliderBot.goToSlide(Math.floor(Math.random() * 9));
}

function resetTimer() {
    clearTimeout(shuffleTimer);
    shuffleTimer = setTimeout(shuffle, 3000);
}