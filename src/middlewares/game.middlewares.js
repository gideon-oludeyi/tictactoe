import {
    SELECT_GAME_POSITION,
    TOGGLE_CURRENT_PLAYER,
    setCurrentPlayer,
    setGameMove,
    toggleCurrentPlayer,
    invalidMoveAttempted,
    SET_GAME_MOVE,
    setGameWinner,
    gameDraw,
} from '../actions/game.actions';
import { isWinner } from '../util/game.util';

// validate selected position before applying changes
const onSelectGamePosition = store => next => action => {
    next(action);

    if (action.type === SELECT_GAME_POSITION) {
        const { game } = store.getState();
        const { row, column } = action.payload;
        const free = game.moves.every(
            ({ position }) => position.row !== row || position.column !== column
        );
        if (free) {
            store.dispatch(setGameMove(game.currentPlayer, action.payload));
            store.dispatch(toggleCurrentPlayer());
        } else {
            store.dispatch(
                invalidMoveAttempted(game.currentPlayer, action.payload)
            );
        }
    }
};

const onSetGameMove = store => next => action => {
    next(action);

    if (action.type === SET_GAME_MOVE) {
        const { game } = store.getState();
        const { player, position } = action.payload;
        const { row: x, column: y } = position;
        const isWinningMove = isWinner(game.moves, player, [x, y]);
        if (isWinningMove) {
            store.dispatch(setGameWinner(player));
        } else if (game.moves.length === 9) {
            store.dispatch(gameDraw());
        }
    }
};

const onToggleCurrentPlayer = store => next => action => {
    next(action);

    if (action.type === TOGGLE_CURRENT_PLAYER) {
        const { game } = store.getState();
        switch (game.currentPlayer) {
            case 'X':
                store.dispatch(setCurrentPlayer('O'));
                break;
            case 'O':
                store.dispatch(setCurrentPlayer('X'));
                break;
        }
    }
};

export default [onSelectGamePosition, onSetGameMove, onToggleCurrentPlayer];
