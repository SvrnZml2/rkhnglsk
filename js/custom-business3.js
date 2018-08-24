(function($) { "use strict";
	
	
	//Home text fade on scroll	
	
   $(window).scroll(function () { 
        var $Fade = $('.tp-caption');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	

	
				//Revolution Slider
	
					var tpj=jQuery;				
					var revapi46;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_46_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_46_1");
						}else{
							revapi46 = tpj("#rev_slider_46_1").show().revolution({
								sliderType:"standard",
								jsFileLocation:"",
								sliderLayout:"fullscreen",
								dottedOverlay:"none",
								delay:8000,
								navigation: {
									keyboardNavigation:"off",
									keyboard_direction: "horizontal",
									mouseScrollNavigation:"off",
									onHoverStop:"off",
									arrows: {
										style: "zeus",
										enable: true,
										hide_onmobile: false,
										hide_onleave: false,
										tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
										left: {
											h_align: "left",
											v_align: "center",
											h_offset: 20,
											v_offset: 0
										},
										right: {
											h_align: "right",
											v_align: "center",
											h_offset: 20,
											v_offset: 0
										}
									},
									touch:{
										touchenabled:"on",
										swipe_threshold: 75,
										swipe_min_touches: 1,
										swipe_direction: "horizontal",
										drag_block_vertical: false
									}
								},
								responsiveLevels:[1240,1024,778,480],
								gridwidth:[1240,1024,778,480],
								gridheight:[868,768,960,720],
								lazyType:"none",
								parallax: {
									type:"mouse",
									origo:"slidercenter",
									speed:2000,
									levels:[2,3,4,5,6,7,12,16,10,50],
									disable_onmobile:"on"
								},
								shadow:0,
								spinner:"off",
								stopLoop:"off",
								stopAfterLoops:-1,
								stopAtSlide:-1,
								shuffle:"off",
								autoHeight:"off",
								fullScreenAlignForce:"off",
								fullScreenOffsetContainer: "off",
								fullScreenOffset: "",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									nextSlideOnWindowFocus:"off",
									disableFocusListener:false,
								}
							});
						}
					});	/*ready*/

	
	
	$(document).ready(function() {"use strict";

	
		//Preloader
		
		  $(".animsition").animsition({
		  
			inClass               :   'fade-in',
			outClass              :   'fade-out',
			inDuration            :    500,
			outDuration           :    500,
			linkElement           :   '.animsition-link', 
			// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			
			overlay               :   false,
			
			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		  });
		
	
		//Parallax
		
		$('.parallax-business4').parallax("50%", 0.4);	
		$('.parallax-business5').parallax("50%", 0.3);	

	
		 

	
	//Scroll back to top
	
		var offset = 450;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	  });


		/* Project Carousel */		
		
		$("#owl-project-slider").owlCarousel({
			pagination : true,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 5000
		});	


		/* Quote Carousel */		
		
		$("#owl-quote-2").owlCarousel({
			pagination : true,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 5000
		});	
 
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	