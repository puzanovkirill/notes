import React from 'react';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.modal);

   const changeIsOpened = (state) => {
      dispatch({ type: 'CHANGE_OPENED', payload: !state });
   };

   return (
      <div className="sm:h-20 flex flex-col sm:flex-row justify-between items-center">
         <div className="flex flex-col sm:flex-row w-2/3 items-center sm:items-stretch">
            <h1 className="sm:text-center inline sm:text-4xl font-bold text-7xl">
               Notes
            </h1>
            <Search />
            <button
               className="sm:h-8 sm:w-8 w-full h-12 bg-gray-100 sm:ml-2 ml-0 self-center rounded-md sm:mt-0 mt-4 sm:border-none border"
               onClick={() => {
                  changeIsOpened(isOpen);
               }}
            >
               <span className="sm:hidden">Add note</span>
               <div className="sm:block hidden">
                  <i className="fa fa-plus"></i>
               </div>
            </button>
         </div>
         <button className="sm:text-xl text-md sm:pl-2 sm:pr-2 p-0 ease-in-out duration-700 sm:relative absolute top-0 left-3/4 sm:left-0">
            Dark mode
         </button>
      </div>
   );
};

export default Navbar;
