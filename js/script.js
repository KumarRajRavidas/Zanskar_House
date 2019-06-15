$(document).ready(function() {

	// Animations on scroll 
    
    
    
    
    // $('.js--wp-3').waypoint(function(direction) {
    //     $('.js--wp-3').addClass('animated fadeIn');
    // }, {
    //     offset: '50%'
    // });
    
    // $('.js--wp-4').waypoint(function(direction) {
    //     $('.js--wp-4').addClass('animated pulse');
    // }, {
    //     offset: '50%'
    // });



	$('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(500);

        if (icon.hasClass('icon ion-md-menu')) {
            icon.addClass('icon ion-md-close');
            icon.removeClass('icon ion-md-menu');
        } else {
            icon.addClass('icon ion-md-menu');
            icon.removeClass('icon ion-md-close');
        } 
   });

	

	$('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

     $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-9').waypoint(function(direction) {
        $('.js--wp-9').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-10').waypoint(function(direction) {  
        $('.js--wp-10').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-f1').waypoint(function(direction) {
        $('.js--wp-f1').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-f2').waypoint(function(direction) {
        $('.js--wp-f2').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    $('.js--wp-f3').waypoint(function(direction) {
        $('.js--wp-f3').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-f4').waypoint(function(direction) {
        $('.js--wp-f4').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

    // $('#js--wp-btn').waypoint(function(direction) {
    //     $('#js--wp-btn').addClass('animated rubberBand');
    // }, {
    //     offset: '0%'
    // });

});


// const element =  document.querySelector('.js--wp-2')
// offset:'50%'
// element.classList.add('animated', 'bounceInRight')



if (screen.width >= 600){window.onscroll = function() {scrollFunction()};}


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.height = "57px";
    document.getElementById("logo1").style.width = "49px";
    document.getElementById("logo2").style.fontSize = "28px";
    document.getElementById("logo").style.fontSize = "28px";  
    document.getElementById("menu_id").style.top = "55px";  
    document.getElementById("navbar").style.background = "white";  
    document.getElementById("menu_id").style.background = "white";
  } 
  else {
    document.getElementById("navbar").style.height = "76px";
    document.getElementById("logo").style.fontSize = "45px";
    document.getElementById("logo1").style.width = "60px";
    document.getElementById("logo2").style.fontSize = "45px";
    document.getElementById("menu_id").style.top = "73px";
  }
}

// #########################################################
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// setTimeout(currentSlide, 500);
