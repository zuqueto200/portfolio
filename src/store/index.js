import { createStore, combineReducers } from 'redux'

import load from './items/Load';
import aviso from './items/Aviso';

const rootReducer = combineReducers({
  loading: load,
  avisando: aviso,

})


export default createStore(rootReducer);
