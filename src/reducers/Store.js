import {createStore,combineReducers} from 'redux';
import usedColours from './reducer';

const rootReducers = combineReducers({
  usedColours,
})
const store = createStore(rootReducers);

export default store;
