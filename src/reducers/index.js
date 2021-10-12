import { gameReducer } from './game.reducer';

const rootReducer = (state = {}, action) => ({
    game: gameReducer(state.game, action),
});

export default rootReducer;
