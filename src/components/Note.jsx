import React, { useRef } from 'react';

const Note = ({ header, date }) => {
   const buttonRef = useRef();

   const toggleButtonClass = () => {
      buttonRef.current.classList.toggle('opacity-0');
      buttonRef.current.classList.toggle('opacity-100');
   };
   return (
      <div
         className="w-60 h-60 hover:shadow-lg transform hover:scale-105 ease-in-out duration-300 cursor-pointer"
         onMouseEnter={() => {
            toggleButtonClass();
         }}
         onMouseLeave={() => toggleButtonClass()}
      >
         <div className="p-6 border rounded-md w-full h-full flex justify-between flex-col">
            <h2 className="break-all text-lg three-dots">{header}</h2>
            <div className="w-full flex justify-between">
               <div>{date}</div>
               <button
                  className="opacity-0 ease-in-out duration-300"
                  ref={buttonRef}
               >
                  <i className="fa fa-trash"></i>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Note;
