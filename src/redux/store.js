import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMidlleware=createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware:()=>[sagaMidlleware],
});

sagaMidlleware.run(productSaga);
export default store;
