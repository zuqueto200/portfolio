import { createStore, combineReducers } from 'redux'

import itemLoad from './items';

const rootReducer = combineReducers({
  loading: itemLoad

})


export default createStore(rootReducer);
