import {combineReducers} from 'redux';
import recipesReducer from './recipes';
import filtersReducer from './filters';


const rootReducer = combineReducers({
  recipes:recipesReducer,
  filters:filtersReducer,
});
export default rootReducer;