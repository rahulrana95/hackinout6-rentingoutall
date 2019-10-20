import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import categoriesReducer from './categories';

const appReducers = combineReducers({
  loginReducer,
  profileReducer,
  categoriesReducer,
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
