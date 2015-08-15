$(document).ready(function() {

  $('.page-call',this).on('click',function(){
       $("#portfoliopage").load("portfolio.html"); 
    });

  $('.page-call',this).on('click',function(){
       $("#weworkspage").load("webworks.html"); 
    });


   $('.fa-times').click(function(){
     $('.page').removeClass("content");
  });


});


