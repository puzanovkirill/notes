import React from 'react';
import Note from './Note';
import { useSelector } from 'react-redux';

const NotesList = ({ notes }) => {
   const searchNotes = useSelector((state) => state.searchNotes.searchNotes);
   const isSearching = useSelector((state) => state.isSearching.isSearching);

   return (
      <div
         className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center
      mt-4 sm:mt-0
      "
      >
         {isSearching
            ? searchNotes.map((item) => {
                 return <Note key={item.id} note={item} />;
              })
            : notes.map((item) => {
                 return <Note key={item.id} note={item} />;
              })}
      </div>
   );
};

export default NotesList;
