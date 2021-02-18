import { combineReducers } from 'redux';
import CarsReducerc from './car';

const allReducers = combineReducers({
  cars: CarsReducerc,
});

export default allReducers;
