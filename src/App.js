import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import ModalWindow from './components/ModalWindow';

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

   const notesArray = [
      {
         id: Math.random(),
         header:
            'Note name 1 some text heresome text heresome textsome textsome textsome textsome textsome textsome textsome textsome text here some text here',
         text: 'some text heresome text heresome text heresome text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 2',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
      {
         id: Math.random(),
         header: 'Note name 3',
         text: 'some text here',
         date: '1/1/1980',
      },
   ];
   return (
      <div className="App">
         <div className="container  mx-auto">
            <Navbar />
            <NotesList notes={notesArray} />
            <ModalWindow />
         </div>
      </div>
   );
}

export default App;
