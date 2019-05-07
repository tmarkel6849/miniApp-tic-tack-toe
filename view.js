/*__________________Initialize Board__________________*/
let gameBoard = new Board();

/*____________________Event listener for plays_________________*/
document.getElementById('board').addEventListener('click', e => {
  let eventCol = e.path[0], eventRow = e.path[1];
  let col = +eventCol.classList[1], row = +eventRow.classList[1];

  if (eventCol.textContent === "") {
    eventCol.textContent = gameBoard.piece;
    if ( gameBoard.placeAndCheck(row, col, gameBoard.piece) === 'winner' ) {
      alert(`${gameBoard.piece}'S WIN!!!'`);
      resetWindow();
    } else if ( gameBoard.checkForTie() === 'tie' ) {
      alert('TIE GAME!!')
      resetWindow();
    }
  }
  updateHeader();
});

/*__________________Reset DOM elements___________________*/
const resetWindow = () => {
  let columns = document.getElementsByClassName('col');
  for (let i = 0; i < columns.length; i++) {
    columns[i].textContent = "";
  }
};

const updateHeader = () => {
  return document.getElementById('turn').textContent = `Current Play: ${gameBoard.piece}`;
}