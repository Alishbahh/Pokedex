// import createSagaMiddleware from 'redux-saga';
// import {createStore, applyMiddleware} from 'redux';
 
// import rootReducer from './reducers';
// import rootSaga from './sagas';
 
// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
 
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
 
// sagaMiddleware.run(rootSaga);
 
// export {store};


import { createStore } from 'redux';
import reducer from './Pokemon/reducer';

const store = createStore(reducer);

export default store;