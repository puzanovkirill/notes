import Navbar from './components/Navbar';
import NotesList from './components/NotesList';

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
         header: 'Note name 1',
         text: 'some text here',
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
         </div>
      </div>
   );
}

export default App;
