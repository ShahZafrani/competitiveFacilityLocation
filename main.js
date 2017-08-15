var redScore = 0;
var blueScore = 0;

var whoseTurn = "Red Player";

var red = "Red Player";
var blue = "Blue Player";

function updateScore()
{
  document.getElementById("redScore").innerHTML = redScore;
  document.getElementById("blueScore").innerHTML = blueScore;
}

function updateButton(button)
{
  button.disabled=true;
  var weight = parseInt(button.innerHTML);
  if(whoseTurn == red) {
    button.className = "redClicked";
    redScore += weight;
  }
  else if (whoseTurn == blue) {
    button.className = "blueClicked";
    blueScore += weight;
  }
  updateScore();
}