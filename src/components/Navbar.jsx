import React from 'react';
import Search from './Search';

const Navbar = () => {
   return (
      <div className="h-20 flex justify-between items-center">
         <div className="flex w-2/3">
            <h1 className="inline text-4xl font-bold">Notes</h1>
            <Search />
            <button className="h-8 w-8 bg-gray-100 ml-2 self-center rounded-md">
               <i className="fa fa-plus"></i>
            </button>
         </div>
         <button className="text-xl pl-2 pr-2 ease-in-out duration-700">
            Dark mode
         </button>
      </div>
   );
};

export default Navbar;
