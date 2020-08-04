import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default applyMiddleware(sagaMiddleware)(createStore)(reducers);
sagaMiddleware.run(rootSaga);