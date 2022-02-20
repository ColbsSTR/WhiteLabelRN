import {combineReducers, createStore, applyMiddleware} from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../Sagas/index';
import authentication from './Authentication.reducer';

const AppReducers = combineReducers({
  //where the reducers go
  authentication,
});

let sagaMiddleware = createSagaMiddleware();

if (__DEV__) {
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({sagaMonitor});
}

const appStore = createStore(AppReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default appStore;