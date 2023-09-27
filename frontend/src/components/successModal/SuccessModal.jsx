import React from 'react';
import './successmodal.css';

function SuccessModal({ message, onClose }){
  return (
    <div className="success-modal">
      <div className="success-modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;