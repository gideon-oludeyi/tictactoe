let currentPlayer = 'X';
let moves = [];

const board = document.getElementById('board');
const displayEl = document.getElementById('display');

function display(text) {
    displayEl.innerHTML = text;
}

function setWinner(mark) {
    display(`Winner: ${mark}`);
}

function setPlayer(mark) {
    currentPlayer = mark;
    display(`Current Player: ${mark}`);
}

function isWinner(marks, player, [x, y]) {
    // Solution: https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over/1058804#1058804
    const grid = [marks.slice(0, 3), marks.slice(3, 6), marks.slice(6, 9)];
    const n = 3;
    let col = (row = diag = rdiag = 0);
    for (let i = 0; i < n; i++) {
        if (grid[x][i] === player) {
            col++;
        }
        if (grid[i][y] === player) {
            row++;
        }
        if (grid[i][i] === player) {
            diag++;
        }
        if (grid[i][n - (i + 1)] === player) {
            rdiag++;
        }
    }
    return col === n || row === n || diag === n || rdiag === n;
}

function createSquare(key) {
    const square = document.createElement('DIV');
    square.setAttribute('class', 'square');
    square.setAttribute('key', `${key}`);
    return square;
}

function subscribe(square) {
    function listener() {
        square.setAttribute('mark', currentPlayer);
        square.innerHTML = currentPlayer;
        setPlayer(currentPlayer === 'X' ? 'O' : 'X');
        const key = Number(square.getAttribute('key')) - 1;
        moves.push([Math.floor(key / 3), key % 3]);
    }

    square.addEventListener('click', listener, { once: true });
    return {
        unsubscribe() {
            square.removeEventListener('click', listener);
        },
    };
}

function newGame() {
    setPlayer('X');

    const subscriptions = {
        subs: [],
        add(subscription) {
            this.subs.push(subscription);
        },
        unsubscribeAll() {
            this.subs.forEach(subscription => subscription.unsubscribe());
            this.subs = [];
        },
    };

    for (let i = 0; i < 9; i++) {
        const square = board.children.item(i);
        const newSquare = createSquare(i + 1);
        const subscription = subscribe(newSquare);
        subscriptions.add(subscription);
        if (square) {
            board.replaceChild(newSquare, square);
        } else {
            board.appendChild(newSquare);
        }
    }

    board.addEventListener('click', function listener() {
        const squares = Array.from(board.children);
        const marks = squares.map(square => square.getAttribute('mark'));

        const candidate = currentPlayer === 'X' ? 'O' : 'X';
        const prevMove = moves[moves.length - 1];
        const won = isWinner(marks, candidate, prevMove);

        const boardIsFull = marks.every(mark => !!mark);

        if (won) {
            board.removeEventListener('click', listener);
            subscriptions.unsubscribeAll();
            setWinner(candidate);
        } else if (boardIsFull) {
            board.removeEventListener('click', listener);
            subscriptions.unsubscribeAll();
            display('Draw');
        }
    });
}

newGame(); // automatically start the game
