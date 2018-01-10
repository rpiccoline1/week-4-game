$(document).ready(function() {

var crystalAmounts = [3, 5, 7, 10];
var playerScore = 0;
var wins = 1;
var losses = 1;

var random = Math.floor(Math.random() * 100);
$("#randomNumber").text(random);

for (var i = 0; i < crystalAmounts.length; i++) {
  var crystalPic= $("#gem-" + i); 
  crystalPic.attr("data-crystalvalue", crystalAmounts[i]);
  console.log(crystalAmounts[i]);
}

$(".crystal-img").click(function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    $("#total-score").text(playerScore += crystalValue);

if (playerScore === random) {
  alert("You win!");
  $("#winner").text(wins++)
}

else if (playerScore >= random) {
  alert("You lose!!");
  $("#loser").text(losses++)
}

});

});