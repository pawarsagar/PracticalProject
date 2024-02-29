import {Store, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer, {RootState} from './rootReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store: any = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
