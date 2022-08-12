var buttonColors = ["red", "blue", "green", "yellow" ];

var gamePattern = [];

var userClickedpattern = [];

function newSequence() {
  var randomNumber = Math.floor(4 * Math.random());

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var music1 = new Audio("sounds/" + randomChosenColor + ".mp3");
  music1.play();

}

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  userClickedpattern.push(userChosenColor);

  console.log(userClickedpattern);
});
