import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

const ModalWindow = ({ note }) => {
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.modal);

   const changeIsOpened = (state) => {
      dispatch({ type: 'CHANGE_OPENED', payload: !state });
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
               />
               <button
                  className="relative -top-6"
                  onClick={() => {
                     console.log(isOpen);
                     changeIsOpened(isOpen);
                  }}
               >
                  <i className="fa fa-close"></i>
               </button>
            </div>
            <hr className="mt-2" />
            <textarea className="h-4/5 text-2xl break-all overflow-y-scroll w-full resize-none outline-none" />
            <hr className="mt-2" />
            <div className="flex justify-between mt-4 ">
               <div className="">date</div>
               <button>Save</button>
            </div>
         </div>
      </Modal>
   );
};

export default ModalWindow;
