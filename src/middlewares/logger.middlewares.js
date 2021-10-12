const loggerMiddleware = () => next => action => {
    next(action);

    console.group(action.type);
    console.info(action);
    console.groupEnd();
};

export default [loggerMiddleware];
