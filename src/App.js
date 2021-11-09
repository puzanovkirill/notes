import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import ModalWindow from './components/ModalWindow';
import { useSelector } from 'react-redux';

function App() {
   //note format
   /*
   {
   id: number,
   header: text,
   text: text,
   color: color,
   }
    */

   const notesArray = useSelector((state) => state.notes.notes);
   console.log(notesArray);
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
