export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import * as UserAPIUtil from '../util/users_api_util';

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const requestAllUsers = () => dispatch => (
  UserAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users))
  )
);