$("#search").focusin(function(){
  $(".input-box__placeholder > label").addClass("focus");
});

$("#search").focusout(function(){
  $(".input-box__placeholder > label").removeClass("focus");
});