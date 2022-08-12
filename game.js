var buttonColors = ["red", "blue", "green", "yellow" ];

var gamePattern = [];

function newSequence() {
  var randomNumber = Math.floor(4 * Math.random());

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.Play();

}

newSequence();
