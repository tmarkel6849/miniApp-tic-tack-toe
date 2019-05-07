class Board {
  constructor() {
    this.playCount = 0;
    this.board = [ ['', '', ''], ['', '', ''], ['', '', ''] ];
    this.startBoard = [ ['', '', ''], ['', '', ''], ['', '', ''] ];
    this.piece = 'X';
  }
  /*________________Board effects__________________*/
  togglePiece() {
    if (  this.piece === 'X' ) {
      this.piece = 'O';
      return;
    } else  {
      this.piece = 'X';
      return;
    }
  }

  restartGame() {
    this.playCount = 0;
    for ( let i = 0; i < 3; i++ ) {
      this.board[i] = this.startBoard[i].slice();
    }
  }
  /*__________________Game Evaluations____________________*/
  checkForTie = () => {
    this.togglePiece();
    this.count++;
    if (this.playCount === 9) {
      this.restartGame();
      this.playCount = 0;
      return 'tie';
    }
  }

  placeAndCheck(row, col, piece) {
    this.board[row][col] = piece;
    if (this.checkForWin(row, col, piece)) {
      this.restartGame();
      this.playCount = 0;
      return 'winner';
    }
  }

/*_______________________________Check for wins______________________________*/
  checkRow(row, piece) {
    for ( let square of this.board[row] ) {
      if ( square !== piece ) {
        return;
      }
    }
    return true;
  }

  checkCol(col, piece) {
    for ( let i = 0; i < 3; i++ ) {
      if ( this.board[i][col] !== piece ) return;
    }
    return true;
  }

  checkRightDiagonal(piece) {
    let col = 2
    for (let i = 0; i < 3; i++) {
      if (this.board[i][col] !== piece) return;
      col--;
    }
    return true;
  }
  checkLeftDiagonal(piece) {
    for (let i = 0; i < 3; i++) {
      if (this.board[i][i] !== piece) return;
    }
    return true;
  }

  checkForWin(row, col, piece) {
    if ( this.checkRow(row, piece) ) return true;
    if ( this.checkCol(col, piece) ) return true;
    if ( this.checkLeftDiagonal(piece) ) return true;
    if ( this.checkRightDiagonal(piece) ) return true;
    return;
  }
}
