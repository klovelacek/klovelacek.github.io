/******************************************
			Overlay on Page Loading
******************************************/
$(window).load(function(){
	$("#overlay").delay(1000).slideUp("slow");
	$('.progress-bars').addClass('invisible');
	$('.process-list').addClass('invisible');
});


$(document).ready(function(){
	$('.section-bg').removeClass('active');

	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 100) {
	       	$(".navbar-default").addClass("navbar-fixed-top navbar-fixed");
	    }else{
	    	$(".navbar-default").removeClass("navbar-fixed-top navbar-fixed")
	    }

	    $('section').each(function () {
	        if ($(window).scrollTop() > $(this).offset().top - ($(this).height())) {
	            $(this).find('.section-bg').removeClass('active').addClass('active');
	        }
	    });

	});

	/********************************************************
				FullPage Scroll initializing function
	********************************************************/
	if($("#page-content").length > 0){
	$('#page-content').fullpage({

		sectionSelector: '.one-page',
		slideSelector: false,
		menu: '#top-menu',
		anchors: ['home', 'skills', 'portofolio', 'process', 'experience', 'info', 'testimonials', 'prices', 'latest-blog', 'calendar', 'contacts'],
		keyboardScrolling: true,
		scrollBar: true,

		onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            //after leaving section 1
            if(index == 1 && direction =='down'){
               $('.navbar-default').addClass('navbar-fixed-top');

            }
            else if(index == 2 && direction == 'up'){
                $('.navbar-default').removeClass('navbar-fixed-top');
                $('.navbar-default a').click(function(){
               		$('.navbar-default').removeClass('navbar-fixed-top');
               	});
            }
            if(index == 3) { loadBars(); }
        }
	});
	if ($(window).height() <= 799) {
			$.fn.fullpage.destroy('all');
		}
		if ($(window).width() <= 800) {
			$.fn.fullpage.destroy('all');
	}
}

	//opacity for header on scrol for another pages
	var header = $('.blog-header .container');
	var range = 200;
	if (header.length > 0){
		$(window).on('scroll', function () {

	    	var scrollTop = $(this).scrollTop();
	    	var offset = header.offset().top;
	    	var height = header.outerHeight();
	    	offset = offset + height / 2;
	    	var calc = 1 - (scrollTop - offset + range) / range;

	 	   header.css({ 'opacity': calc });

	    	if ( calc > '1' ) {
	      	header.css({ 'opacity': 1 });
	    	} else if ( calc < '0' ) {
	      		header.css({ 'opacity': 0 });
	    	}

		});
	}

	/*********************************************************
				Initializing animation on scroll
	**********************************************************/
	new WOW().init();

	/********************************************
	LightBox for dribbleshots portofolio
	********************************************/

if ($('.hover-shot').length > 0){
	$('.hover-shot').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
}

		/** menu close buton **/
		$('.navbar-toggle').click(function(){
			$(this).toggleClass('isClosed');
		});


		$('.navbar-nav a').click(function(){
			$(this).toggleClass('active');
		    $('html, body').animate({
		        scrollTop: $( $(this).attr('href') ).offset().top - 80
		    }, 500);
		    return false;
		});



		$(function() {
		    var $meters1 = $(".meter > span");
		    var $section1 = $('#section1');
		    var $queue = $({});
		    function loadDaBars() {
		    if($section1.attr('finished') == 1) return true;
		        $meters1.each(function() {
		            var $el = $(this);
		            var origWidth = $el.width();
		            $el.width(0);
		            $queue.queue(function(next) {
		                $el.animate({width: origWidth}, 400, next);
		            });
		        });
		        $section1.attr('finished', 1);
		    }
		    $(document).bind('scroll', function(ev) {
		        var scrollOffset = $(window).scrollTop();
		        var containerOffset = $section1.offset().top - 300;
		        if (scrollOffset > containerOffset) {
		        	$('.progress-bars').removeClass('invisible');
		            loadDaBars();
		        }
		    });

		});

});


/********************************************************
			 Function for animated header text
********************************************************/
$(function(){
      $(".animated-intro").typed({
        strings: ["I'm <b>56</b>. I live in <b>Charlotte, North Carolina</b>. <br> <b>I'm a Visual Designer. </b>  I use images concepts and words to create memorable user experiences. ",
        		  "I love <b>playnig Tennis</b> and being<br> the father of one <b>awesome child!</b>",
        		  "I'm also a <b>Woodworker.</b> <br> I like to design and build stuff."], 			//just write what text you want to appear
        typeSpeed: 0,
        backSpeed: 0,
        loop: true,
        startDelay: 1500,
        backDelay: 2000,
      });
  });

/**************************************************************************
			Function to load Process vertical progress bars
***************************************************************************/

	function loadBars() {

		if($('#section3').attr('finished') == 1) return true;
			$(".progress-wrapp").each(function(index){
				$(".progress-wrapp").eq(index).find(".progress > span").each(function(index2){
					$(".progress-wrapp").eq(index).find(".progress > span").eq(index2).data("origWidth", $(".progress-wrapp").eq(index).find(".progress > span").eq(index2).width()).width(0);
						setTimeout(function(){
							$(".progress-wrapp").eq(index).find(".progress > span").eq(index2)
								.animate({
									width: $(".progress-wrapp").eq(index).find(".progress > span").eq(index2).data("origWidth")
								},	1000);
						},index*600);
				});
			});
		$('#section3').attr('finished', 1);
	}

	$(function() {
	 	var $meters3 = $(".progress > span");
	    var $section3 = $('#section3');
	    var $queue = $({});
	    if($('#section3').length > 0){
			$(window).bind('scroll', function(ev) {
				var scrollOffset = $(window).scrollTop();
				var containerOffset = $('#section3').offset().top - $('#section3').height() + 250;
				if (scrollOffset > containerOffset) {
					$('.process-list').removeClass('invisible');
					loadBars();
				}
			});
		}
	});

	/**********************************************
			Horizontal timeline initialization
	***********************************************/
	$(".timeline").timelinr({
		startAt: 1,
		issuesTransparency: 0,
		autoPlay: 'false',
		autoPlayDirection: 'forward',
		autoPlayPause: 5000,
		arrowKeys: 'true',
	});
	$('.timelinebar + #dates > li').on('click',function(){
		resize_timelinebar();
	});

 	/*************************************************
 			Clients carousel initialization
 	*************************************************/
	$(".clients-carousel").owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		margin: 30,
		dots: true,
		rtl: true,
		responsive : {
		    0 : { items: 2 },
		    480 : { items: 3 },
		    768 : { items: 4 },
		},
	});

 	/***********************************************
 			Clients testimonials  initialization
 	***********************************************/
	$(".clients-testimonials").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: true,
	});

	/***********************************************
			 Latest Blog Post hover function
	***********************************************/
	$(".blog-intro").hover(function(){
		$(this).toggleClass("active");
	});

	/***********************************************
			Calendar initialization
	***********************************************/
	var a = new Date();
	document.getElementById("date").innerHTML = a.getDate();

	var c = new Date();
	var month = ["January","February","March","April","May","June","July","August","September","October","November","Dicember"];
	document.getElementById("month").innerHTML = month [c.getMonth()];

	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	document.getElementById("todayDay").innerHTML = days[d.getDay()];

	$('#calendar-block').datepicker({
        inline: true,
        firstDay: 1,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        showOtherMonths: true
    });
    /*** /.Calendar ***/

/**********************************************************
	Additional function for loading horizontal timeline
**********************************************************/
function resize_timelinebar()
{
	return true;
	var SEL=$('.timelinebar + #dates > li > a.selected');
	var TLN=$('.timelinebar');
	var SELL=SEL.offset();
	var TLNL=TLN.offset();
	TLN.css('width',SELL.left - TLNL.left + parseInt(SEL.width()/2));
	$('.timelinebar + #dates > li > a').bind("DOMSubtreeModified",function(){console.log(':)');});
}

function resize_timelinebar2(width,speed) {
	var SEL=$('.timelinebar + #dates > li > a.selected');

	var TLN=$('.timelinebar + #dates');
	var SELL=SEL.offset();
	var TLNL=TLN.offset();
	width+= SELL.left -TLNL.left;

	$('.timelinebar').animate({'width': width}, {
		queue: false,
		duration: speed
	});
}
/*** /.function for loading horizontal timeline ***/

/************************************************
		Form validation
************************************************/
	$('#name').click(function(){
		$('label[for=name]').toggleClass('active-label');
	});
	$('#email').click(function(){
		$('label[for=email]').toggleClass('active-label');
	});
	$('#phone').click(function(){
		$('label[for=phone]').toggleClass('active-label');
	});
	$('#contact-message').click(function(){
		$('label[for=contact-message]').toggleClass('active-label');
	});
    $('#contactForm').validate();


/*************************************************
 			Portofolio menu
*************************************************/
$('.portofolio-menu > li > button').click(function(){
	$('.portofolio-menu li').removeClass('active');
	$('.portofolio-menu li').addClass('active');
})
