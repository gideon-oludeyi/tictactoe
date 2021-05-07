import { useState } from 'react';
import './App.css';
import Square from './Square';

const isOccupied = value => value === 'X' || value === 'O';
const boardIsFull = squares => squares.every(isOccupied);

function isWinner(marks, player, index) {
    const [x, y] = [Math.floor(index / 3), index % 3];
    // Solution: https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over/1058804#1058804
    const grid = [marks.slice(0, 3), marks.slice(3, 6), marks.slice(6, 9)];
    const n = 3;
    let col = 0;
    let row = 0;
    let diag = 0;
    let rdiag = 0;
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

function App() {
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);

    return (
        <div>
            {!(winner || isDraw) && <h1>Player Turn: {turn}</h1>}
            {winner && <h1>Winner: {winner}</h1>}
            {isDraw && <h2>Draw</h2>}
            <button
                onClick={() => {
                    setSquares(new Array(9).fill(null));
                    setTurn('X');
                    setWinner(null);
                    setIsDraw(false);
                }}
            >
                New Game
            </button>
            <ul className="board">
                {squares.map((value, index) => (
                    <Square
                        key={`${index + 1}`}
                        value={value}
                        onClick={() => {
                            if (winner) return;
                            if (isOccupied(value)) return;
                            const newSquares = [...squares];
                            newSquares[index] = turn;
                            setSquares(newSquares);
                            if (isWinner(newSquares, turn, index)) {
                                setWinner(turn);
                            } else if (boardIsFull(newSquares)) {
                                setIsDraw(true);
                            } else {
                                setTurn(turn === 'X' ? 'O' : 'X');
                            }
                        }}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
