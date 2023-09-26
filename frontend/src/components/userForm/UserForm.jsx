import React from 'react';

function UserForm({ isOpen, onClose, user, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <UserForm user={user} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default UserForm;