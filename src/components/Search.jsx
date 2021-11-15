import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
   const dispatch = useDispatch();
   const notes = useSelector((state) => state.notes.notes);

   const setIsSearchingStatus = (state) => {
      dispatch({ type: 'CHANGE_IS_SEARCHING', payload: state });
   };

   const findNotes = (e) => {
      return notes.filter((item) => {
         return item.header.toLowerCase().includes(e);
      });
   };

   const setSearchNotes = (state) => {
      dispatch({ type: 'FIND_NOTES', payload: state });
   };

   const toggleClasses = (e) => {
      e.target.classList.toggle('bg-gray-100');
      e.target.classList.toggle('bg-white');
      e.target.classList.toggle('shadow-md');
   };
   return (
      <div className="w-full ml-0 sm:ml-8 h-12 sm:h-auto mt-4 sm:mt-0">
         <input
            className="dark:bg-gray-800 w-auto sm:w-full bg-gray-100 w-full h-full pl-6 outline-none rounded-md
            ease-in-out duration-700 dark:placeholder-green-400"
            placeholder="type note name here..."
            onFocus={(e) => {
               toggleClasses(e);
            }}
            onBlur={(e) => {
               toggleClasses(e);
            }}
            onChange={(e) => {
               if (e.target.value) {
                  setIsSearchingStatus(true);
                  setSearchNotes(findNotes(e.target.value));
               } else {
                  setIsSearchingStatus(false);
                  setSearchNotes([]);
               }
            }}
         />
      </div>
   );
};

export default Search;
