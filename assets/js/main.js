/***************************************************
==================== JS INDEX ======================
****************************************************
	PreLoader Js
	Mobile Menu Js
	Sidebar Js
	Search Js
	Sticky Header Js
	Data Background Js
	Banner Slider Js
	Nice Select Js
	Portfolio Js 
	Portfolio Slider Js
	MagnificPopup
	Counter Js
	Contact Us Map Js
	Price Range Slider 
	Testimonial Activation Js
	Brand Js
	Post Box Js Slider
	Wow Js

****************************************************/

(function ($) {
	("use strict");

	var windowOn = $(window);

	// PreLoader Js
	$(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

	// Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	// Sidebar Js
	$(".sidebar-toggle-btn").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".body-overlay").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});


	// Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});
	

	// Sticky Header Js
	windowOn.on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$(".menu-sticky, .sticky-mobile").removeClass("sticky");
		} else {
			$(".menu-sticky").addClass("sticky");
		}
	});

	// Data Background Js
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});


	// Banner Slider Js

	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	if (jQuery(".slider__active-2").length > 0) {
		let sliderActive1 = ".slider__active-2";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".swiper-paginations",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	if (jQuery(".slider__active-3").length > 0) {
		let sliderActive1 = ".slider__active-3";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".swiper-paginations",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-prev",
				prevEl: ".slider-button-next",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}
	

	// Nice Select Js
	$("select").niceSelect();

	// Portfolio Js 
	$('.grid').imagesLoaded( function() {
		
		var $grid = $(".grid").isotope({
			// options
		});
		// filter items on button click
		$(".filter-button-group").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".portfolio-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});

	// Portfolio Slider Js Here 
	var portfolio = new Swiper(".portfolio-slider-active", {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: true,
		pagination: {
			el: ".portfolio-slider-pagination",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});

	/* MagnificPopup img view */
	$(".image-popups").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* MagnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// Counter Js
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

	// Contact Us Map Js
	$('.dot').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.dot').removeClass('active');
	});


	// Price Range Slider 
	var handle = $( "#custom-handle" );
	var slider = $("#slider");
	$( "#slider" ).slider({
		value: 120,
		min: 1,
		max: 250,
		create: function() {
		handle.text( $( this ).slider( "value" ) );
		},
		slide: function( event, ui ) {
		handle.text( ui.value );
		}

	});

	// Testimonial Activation Js
	const testimonial = new Swiper(".testimonial-active", {
		// Default parameters
		slidesPerView: 3,
		spaceBetween: 32,
		centeredSlides: true,
		loop: true,
		// Responsive breakpoints
		breakpoints: {	
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
				spaceBetween: 15,
				centeredSlides: false,
			},
			'768': {
				slidesPerView: 2,
				centeredSlides: false,
				spaceBetween: 15,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// Testimonial Activation Js
	const testimonial2 = new Swiper(".services-two-active", {
		// Default parameters
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".services-button-next",
			prevEl: ".services-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {	
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 3,
			},
		},
	});


	// Brand Js
	const brand = new Swiper(".brand-active", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: false,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter:true,
		},
		// Responsive breakpoints
		breakpoints: {
			'1400': {
				slidesPerView: 5,
				centeredSlides:true,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// Brand activation
	const brand2 = new Swiper(".brand-active-2", {
		// Default parameters
		slidesPerView: 5,
		spaceBetween: 150,
		loop: true,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter:true,
		},
		// Responsive breakpoints
		breakpoints: {
			'1400': {
				slidesPerView: 5,
				spaceBetween: 120,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
				spaceBetween: 100,
			},
			'576': {
				slidesPerView: 2,
				spaceBetween: 70,
			},
			'0': {
				slidesPerView: 1
			},
		},
	});

	// Brand 3 activation
	const brand3 = new Swiper(".brand-3-active", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,

		autoplay: {
			delay: 3000,
			pauseOnMouseEnter:true,
		},
		// Responsive breakpoints
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1
			},
		},
	});

	// Post Box Js Slider
	var postboxswiper = new Swiper('.postbox-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
        spaceBetween: 0,
		autoplay: {
		  delay: 4000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".postbox-slider-button-next",
			prevEl: ".postbox-slider-button-prev",
		},
	});

	////////////////////////////////////////////////////
	// Wow Js
	var wow = new WOW(
		{
			mobile: false,
		}
	);
	wow.init();


	





})(jQuery);