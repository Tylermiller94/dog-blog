$(document).ready(function(){
  $("button#bgchange").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#bgchange2").click(function(){
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#bgchange3").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
