$(document).ready(function(){
  var contador = 1;
  $('.menu_bar').click(function(){
    // $('nav').toggle();
    if(contador == 1){
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }

  });
///

  $(".oculto").hide();
$(".btnVerMas").click(function(){
   var self = $(this); 
  self.next().toggle("slow");
/////  
  if(self.val()=="Ver más"){
    self.val("Ver menos");
  } else {
    $(self).val ("Ver más");
  }
});

 $('.sliderlogo').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });


});
