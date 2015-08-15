$(document).ready(function() {

   var $this=$(this);

   $('.page-call').on('click',function(){
   $('.page').addClass("content");
  });


   $('.fa-times').on('click',function(){
   $('.content').fadeOut('slow','swing');
  });
})