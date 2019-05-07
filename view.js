/*__________________Initialize Board__________________*/
let gameBoard = new Board();
let eventCol, eventRow, col, row;
let windowBoard = document.getElementById('board');

/*____________________Event listener for plays_________________*/
windowBoard.addEventListener('click', e => {
  eventCol = e.path[0];
  eventRow = e.path[1];
  col = +eventCol.classList[1];
  row = +eventRow.classList[1];
  if (eventCol.textContent === "") {
    eventCol.textContent = gameBoard.piece;
    if ( gameBoard.placeAndCheck(row, col, gameBoard.piece) === 'winner' ) {
      alert(`${gameBoard.piece}'S WIN!!!'`);
      resetWindow();
    } else if ( gameBoard.placeAndCheck(row, col, gameBoard.piece) === 'tie' ) {
      alert('TIE GAME!!')
      resetWindow();
    }
    gameBoard.togglePiece();
  }
});


/*__________________Reset DOM elements___________________*/
const resetWindow = () => {
  let columns = document.getElementsByClassName('col');
  for (let i = 0; i < columns.length; i++) {
    columns[i].textContent = "";
  }
};