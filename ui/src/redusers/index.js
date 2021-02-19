import { combineReducers } from 'redux';
import UsersReducerc from './user';
import ActiveUser from './user-active';

const allReducers = combineReducers({
  users: UsersReducerc,
  active: ActiveUser,
});

export default allReducers;
