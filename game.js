var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedpattern = [];
var level = 0;

var start = true;
$(document).keydown(function(){
  if (start) {
    $("h1").text("Level " + level)
    nextSequence();
    start = false;
  }
});



if (!start) {
  $("h1").text("Level " + level);
}



function nextSequence() {
  var randomNumber = Math.floor(4 * Math.random());
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}


$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedpattern.push(userChosenColor);
  playSound(userChosenColor);
  if (gamePattern[level] === userClickedpattern[level]) {
    level++;
    $("h1").text("Level " + level);
    nextSequence();
    console.log(gamePattern);
    console.log(userClickedpattern);
    userClickedpattern = [];
  }

});



function playSound(name) {
  var music1 = new Audio("sounds/" + name + ".mp3");
  music1.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100);
}
