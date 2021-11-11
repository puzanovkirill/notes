import { combineReducers, createStore } from 'redux';
import { modalReducer } from './modalReducer';
import { singleNoteReducer } from './singleNoteReducer';
import { notesArrayReducer } from './notesArrayReducer';
import { searchReducer } from './searchReducer';
import { isSearchingReducer } from './isSearchingReducer';

const rootReducer = combineReducers({
   modal: modalReducer,
   singleNote: singleNoteReducer,
   notes: notesArrayReducer,
   searchNotes: searchReducer,
   isSearching: isSearchingReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
   if (store.getState().modal) document.body.style.overflow = 'hidden';
   else document.body.style.overflow = '';
});
