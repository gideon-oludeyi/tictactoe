import Board from './Board';
import Square from './Square';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { useGame } from './useGame';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        display: 'grid',
        background: `linear-gradient(to bottom, ${palette.secondary.main} 0%, ${palette.primary.main} 50%)`,
        height: '100vh',
        rowGap: '50px',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '50px auto',
        gridTemplateAreas: `
            'HEADER HEADER HEADER'
            '  .     GAME    .'
            '  .      .      .'
        `,
    },
    header: {
        gridArea: 'HEADER',
        alignSelf: 'center',
    },
    game: {
        gridArea: 'GAME',
        justifySelf: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',

        display: 'grid',
        gap: '5%',
        justifyItems: 'center',
        alignItems: 'center',
        gridTemplateRows: '1fr 5fr 1fr',
        gridTemplateAreas: `
            'display'
            'board'
            'button'
        `,

        paddingLeft: '15%',
        paddingRight: '15%',
    },
    display: {
        fontWeight: 'bold',
        fontSize: '3em',
    },
}));

function App() {
    const { squares, turn, winner, isDraw, setSquare, reset } = useGame();
    const classes = useStyles();

    let text = `${turn}`;
    if (winner) {
        text = `Winner: ${winner}`;
    }
    if (isDraw) {
        text = 'Draw';
    }
    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <h1>Tictactoe</h1>
            </header>

            <div className={classes.game}>
                <h1 className={classes.display}>{text}</h1>

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

                <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    onClick={reset}
                >
                    New Game
                </Button>
            </div>
        </div>
    );
}

export default App;
