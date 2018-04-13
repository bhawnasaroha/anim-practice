$(".menu-button-area").click( function() {
	$(".menu-button-area").toggleClass("close");
	$(".side-menu").toggleClass("active");
});

$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});

$(document).ready(function() {
	let controller = $.superscrollorama();
	let toLeft = new TimelineMax();
	let scrollDuration = 200;
	controller.addTween('.about-section', TweenMax.to($('.cup-image'), 0.8, {
		css: {
			left: '-250px',
			opacity: '1',
			smoothOrigin: !0
		}
	}), 100);
	controller.addTween('.nuts', TweenMax.to($('.nut1'), 1, {
		css: {
			top: '150px',
			visibility: 'visible',
			smoothOrigin: !0
		}
	}), 180);
	controller.addTween('.nuts', TweenMax.to($('.nut2'), 0.6, {
			css: {
					top: '155px',
					visibility: 'visible',
					smoothOrigin: !0
			}
	}), 120);
	controller.addTween('.nuts', TweenMax.to($('.nut3'), 2, {
			css: {
					top: '165px',
					visibility: 'visible',
					smoothOrigin: !0
			}
	}), 80);
	var sliderArray = $('.animate-slider .slide');
	var currentSlide = $('.animate-slider .highlighted');
	var currentIndex = currentSlide.next().length;
	var sliderLength = sliderArray.length;
	function slideItems() {
		currentIndex += 1;
		if (currentIndex > sliderLength - 1) {
			currentIndex = 0
		}
		var item = $('.animate-slider .slide').eq(currentIndex);
		sliderArray.removeClass('highlighted');
		item.addClass('highlighted');
		console.log(sliderArray);
		console.log(sliderLength);
		console.log(currentSlide);
	}
	setInterval(slideItems, 3000);
});
