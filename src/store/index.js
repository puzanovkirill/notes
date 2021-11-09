import { combineReducers, createStore } from 'redux';
import { modalReducer } from './modalReducer';
import { singleNoteReducer } from './singleNoteReducer';

const rootReducer = combineReducers({
   modal: modalReducer,
   singleNote: singleNoteReducer,
});

export const store = createStore(rootReducer);
