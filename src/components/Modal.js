import React, { useState } from 'react';
import './Modal.css'; // Add your modal styles here

const Modal = (props) => {
    
    const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    props.flag(false);
  };

  return (
    <div className="modal-overlay">
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <i className={props.image}></i>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
