$(document).ready(initializeApp);

function initializeApp() {
  $('.modal').addClass('hide');
  $('.column').on('click', gameAddingChip);
  $('.crd1').addClass('playerchange');
  $('button').on('click', resetGame);
  $('.column').on('click', hoverHandle);
  // $('.column').on('click', offHover);
  $('.column').on('mouseenter', hoverHandle);
  $('.column').on('mouseleave', offHover);

}

var player1 = {
  turn: true,
  chipsArray: [],
  color: 'red'
}
var player2 = {
  turn: false,
  chipsArray: [],
  color: 'yellow'
}
var gameArray = [
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0]
              ];

function gameAddingChip(event) {
  var childDiv = $(event.currentTarget).find('div');
  var columnId = $(event.currentTarget).attr('id');
//game adding chip loop and color
  for(var i=0; i < gameArray.length; i++){
    for (var j = gameArray[i].length-1; j>=0; j--){
      if (gameArray[columnId][j] === 0) {
        if (player1.turn) {
          gameArray[columnId][j] = 1;
          player1.turn = false;
          player2.turn = true;
          $(childDiv[j]).addClass("red");
          checkWinCondition();
          $('.crd1').removeClass('playerchange');
          $('.crd2').addClass('playerchange');
          $(childDiv[j]).addClass('animate'); //drop
          setTimeout(function () { $(childDiv[j]).removeClass('animate') }, 800);// remove drop
          return;
        } else {
          gameArray[columnId][j] = 2;
          player2.turn = false;
          player1.turn = true;
          $(childDiv[j]).addClass("yellow");
          checkWinCondition();
          $('.crd2').removeClass('playerchange');
          $('.crd1').addClass('playerchange');
          $(childDiv[j]).addClass('animate'); //drop
          setTimeout(function () { $(childDiv[j]).removeClass('animate') }, 800);// remove drop
          return;
        }
      }
    }
  }
}


function hoverHandle(event) {
  // debugger;
  var parentElement = $(event.currentTarget).attr('id');
  switch (parentElement) {
    case '0':
      if (player1.turn === true) {
        $('.hover1').addClass('red');
        $('.hover1').css('border', '1px solid black');
      } else {
        $('.hover1').addClass('yellow');
        $('.hover1').css('border', '1px solid black');
      }
      break;
    case '1':
      if (player1.turn === true) {
        $('.hover2').addClass('red');
        $('.hover2').css('border', '1px solid black');
      } else {
        $('.hover2').addClass('yellow');
        $('.hover2').css('border', '1px solid black');
      }
      break;
    case '2':
      if (player1.turn === true) {
        $('.hover3').addClass('red');
        $('.hover3').css('border', '1px solid black');
      } else {
        $('.hover3').addClass('yellow');
        $('.hover3').css('border', '1px solid black');
      }
      break;
    case '3':
      if (player1.turn === true) {
        $('.hover4').addClass('red');
        $('.hover4').css('border', '1px solid black');
      } else {
        $('.hover4').addClass('yellow');
        $('.hover4').css('border', '1px solid black');
      }
      break;
    case '4':
      if (player1.turn === true) {
        $('.hover5').addClass('red');
        $('.hover5').css('border', '1px solid black');
      } else {
        $('.hover5').addClass('yellow');
        $('.hover5').css('border', '1px solid black');
      }
      break;
    case '5':
      if (player1.turn === true) {
        $('.hover6').addClass('red');
        $('.hover6').css('border', '1px solid black');
      } else {
        $('.hover6').addClass('yellow');
        $('.hover6').css('border', '1px solid black');
      }
      break;
    case '6':
      if (player1.turn === true) {
        $('.hover7').addClass('red');
        $('.hover7').css('border', '1px solid black');
      } else {
        $('.hover7').addClass('yellow');
        $('.hover7').css('border', '1px solid black');
      }
      break;
  }
}


function offHover() {
  $('.hoverSections').removeClass('red').removeClass('yellow');
  $('.hoverSections').css('border', '');
}



//winCondition FEATURE
function checkWinCondition() {
  for (var i = 0; i < gameArray.length; i++) {
    for (var j = gameArray[i].length - 1; j >= 0; j--) {
      if (gameArray[i][j] === 1 && gameArray[i][j - 1] === 1 && gameArray[i][j - 2] === 1 && gameArray[i][j - 3] === 1) {
        player1Win();
        return;
      } else if (gameArray[i][j] === 2 && gameArray[i][j - 1] === 2 && gameArray[i][j - 2] === 2 && gameArray[i][j - 3] === 2) {
        player2Win();
        return;
      } else if (gameArray[i + 3]) {
        if (gameArray[i][j] === 1 && gameArray[i + 1][j] === 1 && gameArray[i + 2][j] === 1 && gameArray[i + 3][j] === 1) {
          player1Win();
          return;
        } else if (gameArray[i][j] === 2 && gameArray[i + 1][j] === 2 && gameArray[i + 2][j] === 2 && gameArray[i + 3][j] === 2) {
          player2Win();
          return;
        } else if (gameArray[i][j] === 1 && gameArray[i + 1][j - 1] === 1 && gameArray[i + 2][j - 2] === 1 && gameArray[i + 3][j - 3] === 1) {
          player1Win();
          return;
        } else if (gameArray[i][j] === 2 && gameArray[i + 1][j - 1] === 2 && gameArray[i + 2][j - 2] === 2 && gameArray[i + 3][j - 3] === 2) {
          player2Win();
          return;
        } else if (gameArray[i][j] === 1 && gameArray[i + 1][j + 1] === 1 && gameArray[i + 2][j + 2] === 1 && gameArray[i + 3][j + 3] === 1) {
          player1Win();
          return;
        } else if (gameArray[i][j] === 2 && gameArray[i + 1][j + 1] === 2 && gameArray[i + 2][j + 2] === 2 && gameArray[i + 3][j + 3] === 2) {
          player2Win();
          return;
        }
      }
    }
  }
}
function player1Win(){
console.log("player1 won the game!");
  $('.modal').removeClass('hide');
  $('.modal p').text('Player 1 wins');
}
function player2Win(){
console.log("player2 won the game!");
  $('.modal').removeClass('hide');
  $('.modal p').text('Player 2 Wins');
}
function resetGame(){
  gameArray = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
  $('.column div').removeClass('red').removeClass('yellow');
  $('.modal').addClass('hide');
}


// //SO FAR THIS WILL TURN ALL OF THE HOVER SECTIONS A CERTAIN COLOR
// function hoverChipColorChangerOnClick(event) {
//   var currentColumnToChangeColor = $(event.currentTarget).attr('id');
//     if (player1.turn === true) {
//       $('.hoverSections').addClass('red');
//       $('.hoverSections').css('border', '1px solid black');
//     } else {
//       $('.hoverSections').addClass('yellow');
//       $('.hoverSections').css('border', '1px solid black');
//     }
// }
