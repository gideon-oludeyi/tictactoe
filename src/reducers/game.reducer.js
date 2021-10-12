import {
    RESET_GAME,
    SET_CURRENT_PLAYER,
    SET_GAME_MOVE,
    SET_GAME_WINNER,
} from '../actions/game.actions';

/**
 * initialState = {
 *   currentPlayer: 'X' | 'O';
 *   moves: {
 *     player: 'X' | 'O';
 *     position: {
 *       row: 0 | 1 | 2;
 *       column: 0 | 1 | 2;
 *     };
 *   }[];
 * }
 */

const initialState = {
    currentPlayer: 'X',
    moves: [],
    winner: null,
};

export const gameReducer = (gameState = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case SET_GAME_MOVE:
            return {
                ...gameState,
                moves: [...gameState.moves, payload],
            };

        case SET_CURRENT_PLAYER:
            return {
                ...gameState,
                currentPlayer: payload,
            };

        case SET_GAME_WINNER:
            return {
                ...gameState,
                winner: payload,
            };

        case RESET_GAME:
            return initialState;

        default:
            return gameState;
    }
};
