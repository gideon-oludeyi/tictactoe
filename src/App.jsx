import './App.css';
import Button from './Button';
import { useGame } from './useGame';
import Square from './Square';

function App() {
    const { squares, turn, winner, isDraw, setSquare, reset } = useGame();
    return (
        <div>
            {!(winner || isDraw) && <h1>Player Turn: {turn}</h1>}
            {winner && <h1>Winner: {winner}</h1>}
            {isDraw && <h2>Draw</h2>}

            <Button onClick={reset}>New Game</Button>

            <ul className="board">
                {squares.map((value, index) => (
                    <Square
                        key={`${index + 1}`}
                        value={value}
                        onClick={() => setSquare(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
