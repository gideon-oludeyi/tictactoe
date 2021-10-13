import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';

import Appbar from './Appbar';

import Square from './Square';
import Board from './Board';

import { selectGamePosition, resetGame } from './actions/game.actions';

export default function App() {
    const { currentPlayer, moves, winner } = useSelector(state => state.game);
    const dispatch = useDispatch();

    const flattenedMoves = Array.from(Array(9)).map((_, index) =>
        moves.find(
            ({ position }) =>
                position.row === Math.floor(index / 3) &&
                position.column === index % 3
        )
    );

    return (
        <div>
            <Appbar />
            <Container maxWidth="sm">
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: '90vh' }}
                    spacing={2}
                >
                    <Typography variant="h5" component="h3">
                        {winner ? `Player ${winner} Won` : currentPlayer}
                    </Typography>
                    <Board>
                        {flattenedMoves.map((move, index) => (
                            <Square
                                key={index}
                                value={move?.player}
                                onClick={() =>
                                    dispatch(selectGamePosition(index))
                                }
                            />
                        ))}
                    </Board>
                    <Stack
                        flexDirection="row"
                        justifyContent="space-evenly"
                        width="100%"
                    >
                        <Button
                            startIcon={<UndoIcon />}
                            onClick={() => alert('Not Yet Implemented')}
                        >
                            Undo
                        </Button>
                        <Button
                            variant="contained"
                            disableElevation
                            onClick={() => dispatch(resetGame())}
                        >
                            New Game
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
