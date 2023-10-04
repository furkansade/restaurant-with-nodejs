(function ($) {

	"use strict";

	$(window).on('load', function () {
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350);
		$(window).scroll();
	});

	// Lazy load images
	var lazyLoadInstance = new LazyLoad({
	    elements_selector: ".lazy"
	});

	// Sticky nav
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 1) {
			$('.element_to_stick').addClass("sticky");
		} else {
			$('.element_to_stick').removeClass("sticky");
		}
	});
	$(window).scroll();

	// Header background
	$('.background-image').each(function(){
		$(this).css('background-image', $(this).attr('data-background'));
	});

	// Scroll animation
	scrollCue.init({
	    percentage : 0.85
	});
	
	// Menu
	$('a.open_close').on("click", function () {
		$('.main-menu').toggleClass('show');
		$('.layer').toggleClass('layer-is-visible');
	});
	$('a.show-submenu').on("click", function () {
		$(this).next().toggleClass("show_normal");
	});

	/* Cart Dropdown Hidden From tablet */
	$(window).bind('load resize', function () {
		var width = $(window).width();
		if (width <= 768) {
			$('a.cart_bt').removeAttr("data-bs-toggle", "dropdown")
		} else {
			$('a.cart_bt').attr("data-bs-toggle", "dropdown")
		}
	});
	
	// Opacity mask
	$('.opacity-mask').each(function(){
		$(this).css('background-color', $(this).attr('data-opacity-mask'));
	});

	// Scroll to top
	var pxShow = 800; // height on which the button will show
	var scrollSpeed = 500; // how slow / fast you want the button to scroll to top.
	$(window).scroll(function(){
	 if($(window).scrollTop() >= pxShow){
		$("#toTop").addClass('visible');
	 } else {
		$("#toTop").removeClass('visible');
	 }
	});
	$('#toTop').on('click', function(){
	 $('html, body').animate({scrollTop:0}, scrollSpeed);
	 return false;
	});	
	
	// Image popups
	$('.magnific-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
            preloader: true,
			gallery: {
				enabled: true
			},
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup 
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});
	});

	// Image popups menu
	$('.menu-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'figure a',
			type: 'image',
            preloader: true,
			gallery: {
				enabled: true
			},
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup 
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});
	});

	// Carousels
	$('#staff').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		margin: 10,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	$('.carousel_testimonials').owlCarousel({
	 	items:1,
	    loop:true,
		autoplay:false,
	    animateIn: 'flipInX',
		margin:40,
    	stagePadding:30,
	    smartSpeed:300,
		responsiveClass:true,
	    responsive:{
	        600:{
	            items:1
	        },
			 1000:{
	            items:1,
				nav:false
	        }
	    }
	});

	// Video modal
	$('.btn_play, .video').magnificPopup({
		type: 'iframe',
		closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="font-size:24px; margin-right:-10px;">&#215;</button>'
	});

	// Scroll to position
    $('a[href^="#"].btn_scroll').on('click', function (e) {
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 800, 'swing', function () {
				window.location.hash = target;
			});
	});

})(window.jQuery); 