import Board from './Board';
import Button from './Button';
import Square from './Square';
import { ThemeProvider } from './ThemeContext';
import { useGame } from './useGame';

function App() {
    const { squares, turn, winner, isDraw, setSquare, reset } = useGame();
    return (
        <ThemeProvider>
            {!(winner || isDraw) && <h1>Player Turn: {turn}</h1>}
            {winner && <h1>Winner: {winner}</h1>}
            {isDraw && <h2>Draw</h2>}

            <Button onClick={reset}>New Game</Button>

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
        </ThemeProvider>
    );
}

export default App;
