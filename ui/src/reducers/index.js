import { combineReducers } from 'redux';
import usersReducer from './users.reducer';
import activeUserReducer from './active-user.reducer';

const mainReducer = combineReducers({
  users: usersReducer,
  activeUser: activeUserReducer,
});

export default mainReducer;
