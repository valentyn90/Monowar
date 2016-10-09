$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
	
	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	$('.download').waypoint(function() {
		$('.download .btn').addClass('animated tada');
	}, {
		offset: '75%'
	});

	
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

});


// Pinspirations
// https://www.pinterest.com/pin/358247345338321140/
// https://www.pinterest.com/pin/2322237285669455/

// Still not responsive......  :/   
// One thing at a time man, Im working on it

$( document ).ready(function() {
    // Side-bar Scroll Function
    $(".side-button").click(function(){
        if($(this.hash).height() > $(window).height()) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-25
            }, 1000);
        } else {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-(($(window).height() - $(this.hash).innerHeight())/2)
            }, 1000);
        }
        return false;
    });
    
    // Setting the active on the side buttons
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('#bottomSection').offset().top - $(window).height()/2) {
            $('.side-button').removeClass('active');
            $('#bottomButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#fourthSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#fourthButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#thirdSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#thirdButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#hipsterSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#hipsterButton').addClass('active');
        } else if ($(window).scrollTop() >= $('#topSection').offset().top - $(window).height()/2 ) {
            $('.side-button').removeClass('active');
            $('#topButton').addClass('active');
        }
    });
    
    //Hipster selector function
    $('.hipster-selector-link').click(function(){
        // Setting the active class for the link
        $('.hipster-selector-link').removeClass('active');
        $(this).addClass('active');
        
        // Changing the active content box
        $('.selection-box').removeClass('active');
        $(this.hash).addClass('active');    
        
        // Changing the image on the left side
        if(this.hash == "#chillwaveBox"){
            $('.hipster-left-half').css('background', 'url("http://watmmagazine.com/wp-content/uploads/2012/10/484432_386260888095817_1540832805_n.jpg") no-repeat center');
        } else if(this.hash == "#photographyBox"){
            $('.hipster-left-half').css('background', 'url("http://www.sterlingballroomevents.com/wp-content/uploads/2015/02/wedding-photographer.jpg") no-repeat center');
        } else if(this.hash == "#styleBox"){
            $('.hipster-left-half').css('background', 'url("http://images.8tracks.com/cover/i/000/363/416/owl_fricky-8753.jpg?rect=0,95,842,842&q=98&fm=jpg&fit=max") no-repeat center');
        } else if(this.hash == "#yoloBox"){
            $('.hipster-left-half').css('background', 'url("https://img0.etsystatic.com/038/0/9283026/il_fullxfull.597008186_ptu3.jpg") no-repeat center');
        };
        
        return false;
    });
    
    // Third section menu button function
    $('#menuButton').on('change', function() {
        if ($('#menuButton').is(':checked')) {
            $('.inner-content-container').css('left', '-280px');
            $('.inner-content-container').css('right', '280px');
        } else {
            $('.inner-content-container').css('left', '0px');
            $('.inner-content-container').css('right', '0px');
        }
    });
    
});