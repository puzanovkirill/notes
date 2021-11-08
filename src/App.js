import Navbar from './components/Navbar';

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
         </div>
      </div>
   );
}

export default App;
