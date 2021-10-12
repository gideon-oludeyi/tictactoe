import gameMiddlewares from './game.middlewares';
import loggerMiddlewares from './logger.middlewares';

export default [...gameMiddlewares, ...loggerMiddlewares];
