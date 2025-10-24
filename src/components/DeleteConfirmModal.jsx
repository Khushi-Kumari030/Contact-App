import React from "react";
import { Check, X } from "lucide-react";

export default function DeleteConfirmModal({ contact, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-slide delete-modal">
        <h2>Delete Contact</h2>
        <p>Are you sure you want to delete <strong>{contact.name}</strong>?</p>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}><X /> No</button>
          <button className="save-btn" onClick={onConfirm}><Check /> Yes</button>
        </div>
      </div>
    </div>
  );
}
