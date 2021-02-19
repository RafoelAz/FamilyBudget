import { combineReducers } from 'redux';
import CarsReducerc from './car';
import ActiveCar from './car-active';

const allReducers = combineReducers({
  cars: CarsReducerc,
  active: ActiveCar,
});

export default allReducers;
