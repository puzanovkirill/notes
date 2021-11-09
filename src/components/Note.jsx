import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Note = ({ note }) => {
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.modal);

   const getContent = () => {
      dispatch({ type: 'CREATE_NEW_NOTE', payload: note });
   };

   const changeIsOpened = (state) => {
      document.body.style.overflow = 'hidden';
      dispatch({ type: 'CHANGE_OPENED', payload: !state });
   };

   const removeNote = () => {
      dispatch({ type: 'REMOVE_NOTE', payload: note.id });
   };
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
         onClick={() => {
            getContent();
            changeIsOpened(isOpen);
         }}
      >
         <div className="p-6 border rounded-md w-full h-full flex justify-between flex-col">
            <h2 className="break-all text-lg three-dots">{note.header}</h2>
            <div className="w-full flex justify-between">
               <div>
                  {`${note.date.getDay()}/${note.date.getMonth()}/${note.date.getFullYear()}`}
               </div>
               <button
                  className="opacity-0 ease-in-out duration-300 hover:opacity-100 w-6 h-6"
                  ref={buttonRef}
                  onClick={(e) => {
                     e.stopPropagation();
                     removeNote();
                  }}
               >
                  <i className="fa fa-trash "></i>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Note;
