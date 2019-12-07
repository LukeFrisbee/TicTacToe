  const winConditions = [7,56,73,84,146,273,292,448];
  var scores = [0,0];
  var player=[];
  player[0] = "Player 1";
  player[1] = "Player 2";
  var marker=["X", "O"];
  var whatTurn = 0;
  var gameOver = false;

  function play(clickedDiv, divPoints)
  {
    pointCount(divPoints);
    if (!gameOver)
    {
      clickedDiv.onclick="";
      clickedDiv.innerHTML = "<span>" + marker[whatTurn] + "<span>";
      if (marker[whatTurn] === "X")
      {
        clickedDiv.style.color = "#000000";
      }
      else if (marker[whatTurn] === "O")
      {
        clickedDiv.style.color = "#000000";
      }
    winCheck();
    toggle();
  }
}

function toggle() {
  if (whatTurn == 0)
  {
      whatTurn = 1;
  }
  else
  {
      whatTurn = 0;
  }
  document.getElementById('game-info').innerText = player[whatTurn] + " Turn (" + marker[whatTurn] + ')';
}

function pointCount(playerPoints)
{
    scores[whatTurn] += playerPoints;
}

function winCheck()
{
  for (i=0; i < winConditions.length;i++)
  {
      if((winConditions[i] & scores[whatTurn]) == winConditions[i])
      {
          gameOver=true;
      alert (player[whatTurn] + " Wins!");
      document.getElementById('game-info').innerText = player[whatTurn] + "Wins!";
      }
  }
  if (((scores[0] + scores[1]) == 511) & !gameOver)
  {
      alert ('Cat\'s Game');
      document.getElementById('game-info').innerText = "Cats Wins!";
  }
}
