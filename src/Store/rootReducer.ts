import {combineReducers} from 'redux';
import {userData} from './reducers';

const rootReducer = combineReducers({
  userData: userData,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
