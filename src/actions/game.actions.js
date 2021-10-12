export const GAME = '[Game]';

export const SELECT_GAME_POSITION = `${GAME} SELECT GAME POSITION`;
export const SET_GAME_MOVE = `${GAME} SET GAME MOVE`;
export const RESET_GAME = `${GAME} RESET GAME`;
export const SET_CURRENT_PLAYER = `${GAME} SET CURRENT PLAYER`;
export const TOGGLE_CURRENT_PLAYER = `${GAME} TOGGLE CURRENT PLAYER`;
export const SET_GAME_WINNER = `${GAME} SET GAME WINNER`;
export const INVALID_MOVE_ATTEMPTED = `${GAME} INVALID MOVE ATTEMPTED`;
export const GAME_DRAW = `${GAME} GAME DRAW`;

export const selectGamePosition = index => ({
    type: SELECT_GAME_POSITION,
    payload: {
        row: Math.floor(index / 3),
        column: index % 3,
    },
});

export const setGameMove = (player, position) => ({
    type: SET_GAME_MOVE,
    payload: {
        player,
        position,
    },
});

export const resetGame = () => ({
    type: RESET_GAME,
});

export const toggleCurrentPlayer = () => ({
    type: TOGGLE_CURRENT_PLAYER,
});

export const setCurrentPlayer = player => ({
    type: SET_CURRENT_PLAYER,
    payload: player,
});

export const setGameWinner = player => ({
    type: SET_GAME_WINNER,
    payload: player,
});

export const invalidMoveAttempted = (player, position) => ({
    type: INVALID_MOVE_ATTEMPTED,
    payload: {
        player,
        position,
    },
});

export const gameDraw = () => ({
    type: GAME_DRAW,
});
