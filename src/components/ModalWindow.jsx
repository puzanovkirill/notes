import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

const ModalWindow = () => {
   const dispatch = useDispatch();
   const today = new Date();
   const isOpen = useSelector((state) => state.modal);
   const singleNote = useSelector((state) => state.singleNote);

   const getContent = () => {
      dispatch({ type: 'CREATE_NEW_NOTE', payload: singleNote });
   };

   const changeIsOpened = (state) => {
      dispatch({ type: 'CHANGE_OPENED', payload: !state });
   };

   const resetNote = () => {
      dispatch({ type: 'RESET_NOTE', payload: {} });
   };

   Modal.setAppElement(document.getElementById('root'));
   return (
      <Modal className="modal" isOpen={isOpen}>
         <div className="p-8 h-full">
            <div className="flex justify-between">
               <input
                  maxLength={25}
                  placeholder="header..."
                  className="text-4xl outline-none h-full"
                  value={singleNote.content ? singleNote.content.header : ''}
               />
               <button
                  className="relative -top-6"
                  onClick={() => {
                     changeIsOpened(isOpen);
                     resetNote();
                  }}
               >
                  <i className="fa fa-close"></i>
               </button>
            </div>
            <hr className="mt-2" />
            <textarea
               className="h-4/5 text-2xl break-all overflow-y-scroll w-full resize-none outline-none remove-scrollbar"
               defaultValue={singleNote.content ? singleNote.content.text : ''}
            />
            <hr className="mt-2" />
            <div className="flex justify-between mt-4 ">
               <div className="">
                  {singleNote.content
                     ? singleNote.content.date
                     : `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`}
               </div>
               <button>Save</button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalWindow;
