import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

const ModalWindow = () => {
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.modal);
   const singleNote = useSelector((state) => state.singleNote);
   const newNote = { id: Math.random(), date: new Date() };

   const editField = (type, state) => {
      dispatch({ type: type, payload: state });
   };
   const createNote = (state) => {
      dispatch({ type: 'ADD_NOTE', payload: state });
   };

   const changeIsOpened = (state) => {
      dispatch({ type: 'CHANGE_OPENED', payload: !state });
   };

   const resetNote = () => {
      dispatch({ type: 'RESET_NOTE', payload: {} });
   };

   const changeNote = () => {
      dispatch({ type: 'CHANGE_NOTE', payload: singleNote });
   };

   Modal.setAppElement(document.getElementById('root'));
   return (
      <Modal className="modal" isOpen={isOpen}>
         <div
            className="p-8 h-full"
            onKeyDown={(e) => {
               if (e.key === 'Escape') changeIsOpened(isOpen);
            }}
         >
            <div className="flex justify-between">
               <input
                  maxLength={25}
                  placeholder="header..."
                  className="text-4xl outline-none h-full w-10/12 sm:w-auto"
                  defaultValue={
                     singleNote.content ? singleNote.content.header : ''
                  }
                  onChange={(e) => {
                     if (singleNote.content.id)
                        editField('EDIT_HEADER', e.target.value);
                     newNote.header = e.target.value;
                  }}
               />
               <button
                  className="relative -top-6"
                  onClick={() => {
                     changeIsOpened(isOpen);
                     resetNote();
                  }}
                  tabIndex={-1}
               >
                  <i className="fa fa-close"></i>
               </button>
            </div>
            <hr className="mt-2" />
            <textarea
               className="h-4/5 text-2xl break-all overflow-y-scroll w-full resize-none outline-none remove-scrollbar"
               defaultValue={singleNote.content ? singleNote.content.text : ''}
               onChange={(e) => {
                  if (singleNote.content.id)
                     editField('EDIT_TEXT', e.target.value);
                  newNote.text = e.target.value;
               }}
            />
            <hr className="mt-2" />
            <div className="flex justify-between mt-4 ">
               <div className="">
                  {singleNote.content.id
                     ? `${singleNote.content.date.getDate()}/${
                          singleNote.content.date.getMonth() + 1
                       }/${singleNote.content.date.getFullYear()}`
                     : `${new Date().getDate()}/${
                          new Date().getMonth() + 1
                       }/${new Date().getFullYear()}`}
               </div>
               <button
                  className="pl-2 pr-2 "
                  onClick={() => {
                     if (singleNote.content.id) {
                        changeNote();
                        changeIsOpened(isOpen);
                        return;
                     }
                     createNote(newNote);
                     changeIsOpened(isOpen);
                  }}
               >
                  Save
               </button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalWindow;
