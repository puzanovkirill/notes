import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import ModalWindow from './components/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
   /*
    TASKS:
    1. Dark mode
    2. Adaptive
     */
   const notesArray = useSelector((state) => state.notes.notes);
   const dispatch = useDispatch();

   useEffect(() => {
      if (notesArray.length > 0)
         localStorage.setItem('notes', JSON.stringify(notesArray));
   }, [notesArray]);

   useEffect(() => {
      const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'));
      const changedDateArray = notesFromLocalStorage.map((item) => {
         item.date = new Date(item.date);
         return item;
      });
      if (changedDateArray.length > 0)
         dispatch({ type: 'SET_NOTES', payload: changedDateArray });
   }, []);

   return (
      <div className="App">
         <div className="mx-auto container">
            <Navbar />
            {notesArray.length > 0 ? <NotesList notes={notesArray} /> : null}
            <ModalWindow />
         </div>
      </div>
   );
}

export default App;
