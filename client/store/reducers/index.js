import { combineReducers } from 'redux';
import user from './user';
import sneakers from './sneakers';
import users from './users';

export default combineReducers({
  user,
  sneakers,
  users,
});
