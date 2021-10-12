/**
 * constructs a game board from the set of moves played
 * @param {moves}
 *
 * {
 *   player: 'X' | 'O';
 *   position: {
 *     row: 0 | 1 | 2;
 *     column: 0 | 1 | 2;
 *   };
 * }[]
 */
export function movesToBoard(moves) {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    moves.forEach(move => {
        const { player, position } = move;
        const { row, column } = position;
        board[row][column] = player;
    });

    return board;
}

export function isWinner(moves, player, position) {
    const board = movesToBoard(moves);
    const [x, y] = position;
    board[x][y] = player;
    // ---
    // Solution: https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over/1058804#1058804
    const n = 3;
    let col = 0;
    let row = 0;
    let ldiag = 0;
    let rdiag = 0;
    for (let i = 0; i < n; i++) {
        if (board[x][i] === player) {
            col++;
        }
        if (board[i][y] === player) {
            row++;
        }
        if (board[i][i] === player) {
            ldiag++;
        }
        if (board[i][n - (i + 1)] === player) {
            rdiag++;
        }
    }
    return col === n || row === n || ldiag === n || rdiag === n;
}
