import React, { useState } from "react";
import "./Modal.css"; // Stili per il modale

function SearchModal({ onClose, children }) {
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default SearchModal;
