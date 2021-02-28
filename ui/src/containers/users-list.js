import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../actions/index';

export const UsersList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const showList = () => {
    /* eslint-disable */
    return users.map((user) => {
      return (
        <li onClick={() => dispatch(select(user))} key={user.id}>
          {user.name}
        </li>
      );
    });
    /* eslint-enable */
  };

  return <ol>{showList()}</ol>;
};
