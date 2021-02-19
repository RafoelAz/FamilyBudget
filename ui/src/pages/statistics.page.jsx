import React from 'react';
import UsersList from '../containers/users-list';
import Details from '../containers/details';

export function StatisticsPage() {
  return (
    <>
      <h1>Objectives Page</h1>
      <hr />
      <h3>Users:</h3>
      <UsersList />
      <h3>Statistics:</h3>
      <Details />
    </>
  );
}
