import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import ModalWindow from './components/ModalWindow';
import { useSelector } from 'react-redux';

function App() {
   /*
    TASKS:
    1. Note changing
    2. Dark mode
    3. Adaptive
     */
   const notesArray = useSelector((state) => state.notes.notes);

   return (
      <div className="App">
         <div className="container  mx-auto">
            <Navbar />
            {notesArray.length > 0 ? <NotesList notes={notesArray} /> : null}
            <ModalWindow />
         </div>
      </div>
   );
}

export default App;
