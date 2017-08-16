var redScore = 0;
var blueScore = 0;

var whoseTurn = "Red Player";
var red = "Red Player";
var blue = "Blue Player";

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
  if(whoseTurn == red) {
    button.className = "redClicked";
    redScore += weight;
  } else if (whoseTurn == blue) {
    button.className = "blueClicked";
    blueScore += weight;
  }
  changeTurn();
  updateView();
  disableNeighbors(button.id)

}

function disableNeighbors(elemId) {
  var nodeNum = parseInt(elemId.slice(4));
  var left = nodeNum -1;
  var right = nodeNum +1;

  if(document.getElementById("node"+left)) {
    document.getElementById("node"+left).disabled = true;
  }
  if(document.getElementById("node"+right)) {
    document.getElementById("node"+right).disabled = true;
  }
}

function generateGameBoard() {
  var gameSize = document.getElementById("gameSize").value;
  var maxVal = document.getElementById("maxWeight").value;
  var minVal = document.getElementById("minWeight").value;
  var rnJesus = 10;
  var container = document.getElementById("node-container");
  container.innerHTML = "";
  redScore = 0;
  blueScore = 0;
  
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
