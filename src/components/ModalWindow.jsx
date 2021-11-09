import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalWindow = ({ note }) => {
   const [isOpen, setIsOpen] = useState(true);

   Modal.setAppElement(document.getElementById('root'));
   return (
      <Modal className="modal" isOpen={isOpen}>
         <div className="p-8 h-full">
            <div className="flex justify-between">
               <input
                  maxLength={20}
                  placeholder="header..."
                  className="text-4xl outline-none"
               />
               <button className="" onClick={() => setIsOpen(false)}>
                  <i className="fa fa-close"></i>
               </button>
            </div>
            <hr className="mt-2" />
            <textarea className="h-4/5 text-2xl break-all overflow-y-scroll w-full resize-none outline-none" />
            <hr className="mt-2" />
         </div>
      </Modal>
   );
};

export default ModalWindow;
