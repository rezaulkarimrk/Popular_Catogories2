(function ($) {
	"use strict";
	jQuery(document).ready(function(){

		$('.listing-carousel').owlCarousel({
			items: 3,
			autoplay:false,
			loop: true,
			nav: false  ,
			dots:true,
			 // navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			// smartSpeed: 2000,
			// navSpeed: 2000,
			 dotsSpeed: 2000,
			// autoplaySpeed: 3000,
			margin: 30
		});
		


	});




	jQuery(window).load(function(){


		
	});



}(jQuery));

