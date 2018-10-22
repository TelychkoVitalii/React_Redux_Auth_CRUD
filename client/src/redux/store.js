import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/root.reducer';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas/rootSaga';

const loggerMiddleware = createLogger({ collapsed: true }),
      sagaMiddleware = createSagaMiddleware(),
      createStoreWithMiddleware = applyMiddleware(sagaMiddleware, loggerMiddleware),
      store = createStore(rootReducer, compose(createStoreWithMiddleware));

sagaMiddleware.run(rootSaga);

export default store;