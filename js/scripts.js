function Player(mark) {
  this.mark = mark;
}

function Space(x,y) {
  this.x = x;
  this.y = y;
  this.player = "";
}

Space.prototype.xCoordinate = function() {
  return this.x;
}

Space.prototype.yCoordinate = function() {
  return this.y;
}

Space.prototype.mark = function(player) {
  this.player = player;
}

Space.prototype.markedBy = function() {
  return this.player;
}

function Board() {
  this.spaces = [];
}

Board.prototype.build = function() {
  var boardString = "";
  var spaces = [];
  var currentSpace;
  for (var i = 0; i < 3; i++) {
    boardString += "<div class='row'>";
    for (var j = 0; j < 3; j++) {
      boardString += "<div value = '"+i+j+"' class='openSquare col-md-4' id='space" + i + j + "'></div>";
      currentSpace = new Space(i,j);
      spaces.push(currentSpace);
    }
    boardString += "</div>";
  }
  $("#board").append(boardString);
  this.spaces = spaces;
}

Board.prototype.find = function(x,y) {
  if (this.spaces) {
    for (var i = 0; i < this.spaces.length; i++) {
      if (this.spaces[i].x == x && this.spaces[i].y == y) {
        return this.spaces[i];
      } else {
      }
    }
  }
  return false;
}

function Game() {
  this.player1 = new Player("X");
  this.player2 = new Player("O");
  this.board = new Board;
  this.turn = 1;
  this.end = false;
}

Game.prototype.endTurn = function() {
  this.turn = this.turn == 1 ? 2 : 1;
}

Game.prototype.gameOver = function() {
  var over = false;

  if ()

  if (over) {
    return true;
  } else {
    return false;
  }
}

function checkGame(squares) {
  if (squares.length >= 5) {
    for (var i = 0; i < squares.length - 2; i++) {
      for (var j = i + 1; j < squares.length - 1; j++) {
        if (squares[i].markedBy() == squares[j].markedBy()) {
          for (var k = j + 1; k < squares.length; k++) {
            if (squares[i].markedBy() == squares[k].markedBy()) {
              

            }
          }
        }

      }

    }
  }

  return;
}


var player = 1;
var winner = 0;
var squaresFilled = [];
var example;

$(document).ready(function() {
  var newGame = new Game;
  var newBoard = newGame.board;
  newBoard.build();

  $("#board").on("click",".openSquare", function() {

    var activePlayer = "player" + newGame.turn;

    $(this).append("<h1 class='markedCell'>" + newGame[activePlayer].mark + "</h1>");

    var activeSpace = newBoard.find(this.id[5],this.id[6]);
    activeSpace.mark(newGame[activePlayer].mark);
    squaresFilled.push(activeSpace);

    checkGame(squaresFilled);

    if (newGame.gameOver()) {
      break;
    }
    newGame.endTurn();
    if (winner == 1) {

    } else if (winner == 2) {

    }

  });
});