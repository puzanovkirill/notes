import React from 'react';
import Note from './Note';

const NotesList = ({ notes }) => {
   return (
      <div className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center">
         {notes.map((item) => {
            return <Note key={item.id} note={item} />;
         })}
      </div>
   );
};

export default NotesList;
