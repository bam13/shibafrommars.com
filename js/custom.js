$(document).ready(function() {

   var $this=$(this);



$(".page-call").on("click", function () {
    $(".page").removeClass("content");
    $(this).addClass("content");
});

   $('.fa-times').on('click',function(){
   $('.content').fadeOut('slow','swing');
  });
times
})