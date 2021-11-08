import React, { useRef } from 'react';

const Note = () => {
   const buttonRef = useRef();

   return (
      <div className="w-60 min-h-60">
         <div className="p-6 border rounded-md w-full h-full flex justify-between flex-col">
            <h2 className="break-all text-lg">Note name</h2>
            <div className="w-full flex justify-between">
               <div>1/1/1980</div>
               <button className="" ref={buttonRef}>
                  <i className="fa fa-trash"></i>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Note;
