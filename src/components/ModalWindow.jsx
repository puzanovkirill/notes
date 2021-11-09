import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalWindow = () => {
   const [isOpen, setIsOpen] = useState(true);

   Modal.setAppElement(document.getElementById('root'));
   return (
      <Modal
         isOpen={isOpen}
         style={{
            width: '80wh',
            height: '80vh',
         }}
      >
         <div className="p-8 h-full">
            <div className="flex justify-between">
               <div className="text-4xl">some text</div>
               <button className="" onClick={() => setIsOpen(false)}>
                  <i className="fa fa-close"></i>
               </button>
            </div>
            <hr className="mt-2" />
            <div className="h-4/5 text-2xl break-all overflow-y-scroll">
               note text here
            </div>
            <hr className="mt-2" />
         </div>
      </Modal>
   );
};

export default ModalWindow;
