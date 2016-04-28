// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//


//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require jquery_ujs
//= require_tree .
//= require turbolinks


$.turbo.use('pjax:start', 'pjax:end');

$(document).ready(function(){
  $(".text_animation").click(function(){
     $(this).html("<a><b>F</b>AMMI USCIRE <b>W</b>EBBY&nbsp;&nbsp; |</a>");
     $(".main_menu").css({
       "width": "220px"
     });
     $(".uno").addClass("uno_animated");
     $(".tre").addClass("tre_animated");
     $(".due").addClass("due_animated");
     $(".uno").removeClass("uno_animated_reverse");
     $(".tre").removeClass("tre_animated_reverse");
     $(".due").removeClass("due_animated_reverse");
     $(".navigazione").removeClass("navigazione_bounce_out");
     $(".navigazione").addClass("navigazione_bounce");
     $(".navigazione").removeClass("navigazione_display");
     $(".ham_menu").css({
       "cursor": "pointer"
     });
  });
  $(".ham_menu").click(function(){
    $(".text_animation").html("<a><b>M</b>ENU&nbsp;&nbsp; |</a>");
    $(".main_menu").css({
      "width": "100px"
    });
    $(".uno").addClass("uno_animated_reverse");
    $(".tre").addClass("tre_animated_reverse");
    $(".due").addClass("due_animated_reverse");
    $(".navigazione").addClass("navigazione_bounce_out");
  });
  $(".logo").mouseenter(function(){
    $(".saluto_logo").removeClass("saluto_opacity");
    $(".saluto_logo").addClass("saluto_animation");
    $(this).mouseleave(function(){
    $(".saluto_logo").addClass("saluto_opacity");
    $(".saluto_logo").addClass("saluto_animation");
  });
  });
});

