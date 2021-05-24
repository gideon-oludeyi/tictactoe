import Board from './Board';
import Button from './Button';
import Square from './Square';
import { ThemeProvider } from './ThemeContext';
import { useGame } from './useGame';
import './App.css';

function App() {
    const { squares, turn, winner, isDraw, setSquare, reset } = useGame();
    let text = `${turn}`;
    if (winner) {
        text = `Winner: ${winner}`;
    }
    if (isDraw) {
        text = 'Draw';
    }
    return (
        <ThemeProvider>
            <div className="App">
                <header>Tictactoe</header>
                <div className="Game">
                    <h1 className="display">{text}</h1>

                    <Board>
                        {squares.map((value, index) => (
                            <Square
                                key={`${index + 1}`}
                                onClick={() => setSquare(index)}
                            >
                                {value}
                            </Square>
                        ))}
                    </Board>

                    <Button onClick={reset}>New Game</Button>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
