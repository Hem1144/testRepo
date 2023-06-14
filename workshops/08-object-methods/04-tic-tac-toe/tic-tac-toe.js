// YOUR CODE BELOW
const ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function (character, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
      this.board[rowNum][colNum] = character;
    }
    console.log(this.board);
    return this.board;
  },

  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log(this.board);
    return this.board;
  },
};

ticTacToe.move("X", 0, 0);
ticTacToe.move("O", 1, 1);
ticTacToe.move("X", 2, 2);
ticTacToe.clear();
