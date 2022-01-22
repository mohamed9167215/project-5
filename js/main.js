$(document).ready(function(){
    $('.open .cl').click(function(){
          $('.sidebar').css('left' , '0');

    });
$('.sidebar .toggle').click(function(){
       $('.sidebar').css('left','-365px');
});

/* slide show */
$('.carousel').carousel({
    interval: 5000

});

});