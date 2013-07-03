/*    
       _____  ____  _    ___          ________  _____ _______       _____  
      / ____|/ __ \| |  | \ \        / /  ____|/ ____|__   __|/\   |  __ \ 
     | |  __| |  | | |  | |\ \  /\  / /| |__  | (___    | |  /  \  | |  | |
     | | |_ | |  | | |  | | \ \/  \/ / |  __|  \___ \   | | / /\ \ | |  | |
     | |__| | |__| | |__| |  \  /\  /  | |____ ____) |  | |/ ____ \| |__| |
      \_____|\____/ \____/    \/  \/   |______|_____/   |_/_/    \_\_____/ 
                                                                  
          |\/|  _. ._ |   _ _|_ o ._   _    ()    |\/|  _   _| o  _. 
          |  | (_| |  |< (/_ |_ | | | (_|   (_X   |  | (/_ (_| | (_| 
                                       _|                            
                             
                              © www.gouwestad.com
                         
                           WHY ARE YOU LOOKING HERE? ;)
*/








// Show the sliding nav
$("#nav-btn").click(function (e) {
   e.preventDefault();
  $("#nav-btn, #slide-nav, .body-overlay, .page-container").toggleClass("visible");
});

$("#nav-btn-close").click(function (e) {
   e.preventDefault();
  $("#nav-btn, #slide-nav, .body-overlay, .page-container").toggleClass("visible");
});

// add touch support for sliding nav
//$(document).ready(function() {
  //$('.page-container').hammer().on("swiperight", function(e) {
   //  e.preventDefault();
   //       $('#nav-btn, #slide-nav, .body-overlay, .page-container').addClass('visible');  
   //   });
  //$('.page-container, #slide-nav, .body-overlay').hammer().on("swipeleft", function(e) {
  //   e.preventDefault();
 //         $('#nav-btn, #slide-nav, .body-overlay, .page-container').removeClass('visible');  
   //   });
//
//});


// On slide-nav links click close side menu
$(".menu-link").click(function () {
  $('#nav-btn, #slide-nav, .body-overlay, .page-container').removeClass('visible'); 
});

// Fomulier mailchimp animatie
$("#btn-mc").click(function (e) {
   e.preventDefault();
  $(".mc-page-2").toggleClass("animate-open");
});


$("#btn-mc-close").click(function (e) {
   e.preventDefault();
  $(".mc-page-2").toggleClass("animate-open");
});

// Waypoints stuff

$(function() {
    $("header").toggleClass("animate");
});



// Introductie vakjes openen
$(".blokje").click(function (e) {
   e.preventDefault();
  $(".block-overlay").toggleClass("open");
});

$(".blokje-close").click(function (e) {
   e.preventDefault();
  $(".block-overlay").toggleClass("open");
});

//Responsive showcase nav
$("#slide-desktop-btn").click(function (e) {
   e.preventDefault();
  $('.flexslider').flexslider(1);
});

$("#slide-laptop-btn").click(function (e) {
   e.preventDefault();
  $('.flexslider').flexslider(2);
});

$("#slide-mobile-btn").click(function (e) {
   e.preventDefault();
  $('.flexslider').flexslider(3);
  });


