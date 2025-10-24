import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onMessage, onCall, onHistory, onEdit, onDelete }) {
  // Group contacts by first alphabet
  const grouped = contacts.reduce((acc, contact) => {
    const letter = contact.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(contact);
    return acc;
  }, {});

  const sortedLetters = Object.keys(grouped).sort();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {sortedLetters.map((letter) => (
        <div key={letter}>
          <div className="alphabet-header">{letter}</div>
          {grouped[letter].map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onMessage={onMessage}
              onCall={onCall}
              onHistory={onHistory}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
