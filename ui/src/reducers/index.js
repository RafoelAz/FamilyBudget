import { combineReducers } from 'redux';
import usersReducer from './users.reducer';
import activeUserReducer from './active-user.reducer';

const allReducers = combineReducers({
  users: usersReducer,
  activeUser: activeUserReducer,
});

export default allReducers;
