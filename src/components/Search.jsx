import React from 'react';

const Search = () => {
   const toggleClasses = (e) => {
      e.target.classList.toggle('bg-gray-100');
      e.target.classList.toggle('bg-white');
      e.target.classList.toggle('shadow-md');
   };
   return (
      <div className="w-2/3 ml-8">
         <input
            className="w-auto bg-gray-100 w-full h-full pl-6 outline-none rounded-md ease-in-out duration-700"
            placeholder="type note name here..."
            onFocus={(e) => {
               toggleClasses(e);
            }}
            onBlur={(e) => {
               toggleClasses(e);
            }}
            onClick={(e) => {}}
         />
      </div>
   );
};

export default Search;
