var redScore = 0;
var blueScore = 0;

var whoseTurn = "Red Player";
var gameSize = 11;
var red = "Red Player";
var blue = "Blue Player";

var maxVal = 10;
var minVal = 1;

function updateView()
{
  document.getElementById("redScore").innerHTML = redScore;
  document.getElementById("blueScore").innerHTML = blueScore;
  document.getElementById("whoseTurn").innerHTML = "It is currently " + whoseTurn + "'s turn";
}

function changeTurn() {
  if(whoseTurn == red){
    whoseTurn = blue;
  } else if (whoseTurn == blue){
    whoseTurn = red;
  }
}

function clickButtonHandler(event) {

  var button = (event.target); 
  button.disabled=true;
  var weight = parseInt(button.innerHTML);
  console.log(weight);
  if(whoseTurn == red) {
    button.className = "redClicked";
    redScore += weight;
  } else if (whoseTurn == blue) {
    button.className = "blueClicked";
    blueScore += weight;
  }
  changeTurn();
  updateView();

}

function generateGameBoard() {
  var rnJesus = 10;
  var container = document.getElementById("node-container");
  
  for (i = 0; i < gameSize; i++) {
    rnJesus = Math.floor((Math.random() * maxVal) + minVal);
    var nodeId = "node" + i;
    var button = document.createElement('button');
    button.className = "node-button";
    button.innerHTML = rnJesus;
    button.id = nodeId;
    container.appendChild(button);
    button.onclick = clickButtonHandler;
  }
  updateView();
}
