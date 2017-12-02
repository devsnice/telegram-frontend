import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import authSaga from '../components/containers/Auth/model/saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authSaga);

export default store;

/*

 #sagas

 - auth 
    - take every auth


 - add project
    - take every create new project 
      (wait auth)
      (redirect to)
      (wait for request)


 - add new post 
    - take every create new post
      (send to server)









*/
