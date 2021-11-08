import Navbar from './components/Navbar';
import Note from './components/Note';

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

   return (
      <div className="App">
         <div className="container  mx-auto">
            <Navbar />
            <Note />
         </div>
      </div>
   );
}

export default App;
