import { combineReducers, createStore } from 'redux';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({ modal: modalReducer });

export const store = createStore(rootReducer);
