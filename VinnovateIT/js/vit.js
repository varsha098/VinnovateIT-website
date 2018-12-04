$(window).scroll(function(){
    if($(document).scrollTop()>336){
        $('nav').removeClass('transparent')
        $('nav').addClass('black')
        $('nav').removeClass('z-depth-0')
        $('nav').addClass('z-depth-2')
    }
    else{
        $('nav').addClass('transparent')
        $('nav').removeClass('z-depth-2')
        $('nav').removeClass('black')
        $('nav').addClass('z-depth-0')
    }
})

function scrollDiv2(e){
    console.log(e)
    $([document.documentElement, document.body]).animate({
        scrollTop:$('.div4').offset().top
    }, 700);
    console.log('abc')
  }

  function scrollDiv3(e){
    console.log(e)
    $([document.documentElement, document.body]).animate({
        scrollTop:$('#contact').offset().top
    }, 700);
    console.log('abc')
  }

  


  $(document).ready(function(){
    $('.slider').slider();
  });

  function scrollDiv4(e){
    console.log(e)
    $([document.documentElement, document.body]).animate({
        scrollTop:$('#gallery').offset().top
    }, 700);
    console.log('abc')
  }

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  function scrollDiv5(e){
    console.log(e)
    $([document.documentElement, document.body]).animate({
        scrollTop:$('#team').offset().top
    }, 700);
    console.log('abc')
  }

  
       