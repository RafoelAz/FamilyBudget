import React from 'react';
import CarsList from '../containers/cars-list';
import Details from '../containers/details';

export function ObjectivesPage() {
  return (
    <>
      <h1>Objectives Page</h1>
      <hr />
      <h3>Cars:</h3>
      <CarsList />
      <hr />
      <h3>Details:</h3>
      <Details />
    </>
  );
}
