			//Responsive menu toggle code
			function activateResponsiveNav(){
				$("#nav-toggle").click(function(){						
					$("html").toggleClass("openResponsiveNav");
					//$("#responsive-nav").toggle();
				});
				//Mobile menu Nav icon animation
				if (typeof document.querySelector("#nav-toggle").addEventListener=='function'){
					document.querySelector("#nav-toggle").addEventListener("click", function(){
						this.classList.toggle("active");
					});
				}
			};
				
			function scrollToTop(onScroll) {
				// hide #back-top first
				$("#back-top").hide();
				// fade in #back-top
				$(function () {
					$(window).scroll(function () {
						if ($(this).scrollTop() > 100) {
							$('#back-top').fadeIn();
						} else {
							$('#back-top').fadeOut();
						}
					});
					// scroll body to 0px on click
					$('#back-top a').click(function () {
						$('body,html').animate({scrollTop: 0}, 800);
						if (typeof onScroll=='function') onScroll();
						return false;
					});
				});
			};

	// http://codepen.io/viriava/pen/LxLYRP
	ScrollHideNav = function(domRef) {
		// Hide Header on on scroll down		
		//this.didScroll;
		this.lastScrollTop = 0;
		this.delta = 5;
		this.navbarHeight = $(domRef).outerHeight();		
		this.domRef = domRef;
		var instance = this;

		this.hasScrolled = function() {
		    var st = $(window).scrollTop();
		    
		    // Make sure they scroll more than delta
		    /*if(Math.abs(lastScrollTop - st) <= delta)
		        return;*/
		    
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > instance.lastScrollTop /*&& st > navbarHeight*/){
		        // Scroll Down
		        $(instance.domRef).removeClass('nav-down').addClass('nav-up');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            $(instance.domRef).removeClass('nav-up').addClass('nav-down');
		        }
		    }
		    
		    instance.lastScrollTop = st;
		};		
	};
	var scrollHideNav = new ScrollHideNav('.header');

	$(window).scroll(function(event){
	    scrollHideNav.hasScrolled();   
	});		

	function handler() {
				    //alert ("Hello World!");
	}	
			
	$(document).ready(function(){	
		activateResponsiveNav();
		scrollToTop();
		//https://medium.com/@devlucky/about-passive-event-listeners-224ff620e68c
		document.addEventListener('touchstart', handler, {capture: true});		
	});
		

			

			