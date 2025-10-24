import React from "react";
import { X, CheckCircle } from "lucide-react";

export default function InfoModal({ onClose }) {
  const features = [
    "Search contacts using the search bar.",
    'Click "Add Contact" button to add new contacts.',
    "Contacts are sorted alphabetically with headers.",
    "Hover over a contact to see options: Message, Call, History, Edit, Delete.",
    "Click Message or History to open side panel.",
    "Typing box available only in Message panel.",
    "Theme toggle available via floating button.",
    "Delete action asks for confirmation popup.",
    "Success notifications appear on top.",
  ];

  return (
    <div className="modal-backdrop">
      <div className="modal-slide" style={{ maxWidth: 500, position: "relative" }}>
        {/* Close Icon */}
        <X
          size={24}
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",
            color: "var(--primary)",
          }}
        />

        <h2 style={{ marginBottom: 15, textAlign: "center", color: "var(--primary)" }}>
          📘 Contacts App Features
        </h2>

        <ul style={{ lineHeight: 2, paddingLeft: 0 }}>
          {features.map((f, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
                fontSize: 14,
                color: "var(--text)",
              }}
            >
              <CheckCircle size={18} color="#3399ff" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
