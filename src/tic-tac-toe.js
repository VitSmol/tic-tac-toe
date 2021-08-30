class TicTacToe {
    constructor() {

    }
    currentPlayer = 'x'
    field = [
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]
    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] ) {
            return null
        }
        this.field[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
    }

    isFinished() {
        return (this.getWinner() || this.isDraw()) ? true : false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
                return this.field[i][0];
            }
        }
        for (let i = 0; i < 3; i++) {
            if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                return this.field[0][i];
            }
        }
        if (this.field[2][0] === this.field[1][1] && this.field[1][1] === this.field[0][2]) {
                return this.field[0][2]
        }
        if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) {
            return this.field[0][0]
        }
        return null
    }

    noMoreTurns() {
        return this.field.flat().every(a => a !== null) ? true : false;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
