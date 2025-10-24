import React, { useState, useEffect } from "react";
import "./styles/theme.css";
import { getContacts } from "./api/mockApi";
import ContactList from "./components/ContactList";
import AddContactModal from "./components/AddContactModal";
import MessagePanel from "./components/MessagePanel";
import InfoModal from "./components/InfoModal";
import { Info, Plus, Sun, Moon, X, CheckCircle } from "lucide-react";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  const [activeView, setActiveView] = useState(null); // 'message' | 'history'
  const [selectedContact, setSelectedContact] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editContact, setEditContact] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Load contacts
  useEffect(() => {
    getContacts().then((data) => {
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      setContacts(sorted);
      setFiltered(sorted);
    });
  }, []);

  // Handle theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handle search
  useEffect(() => {
    const filteredContacts = contacts.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredContacts);
  }, [search, contacts]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Add or Edit contact
  const handleAddOrEdit = (contact) => {
    let updated;
    if (editContact) {
      updated = contacts.map((c) => (c.id === contact.id ? contact : c));
      setEditContact(null);
    } else {
      updated = [...contacts, contact];
    }
    updated.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(updated);
    setShowAddModal(false);
    setSuccessMsg(
      editContact ? "Contact updated successfully!" : "Contact added successfully!"
    );
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  // Delete contact
  const handleDelete = (contact) => {
    setContacts((prev) => prev.filter((c) => c.id !== contact.id));
    setShowDeleteConfirm(null);
    setSuccessMsg("Contact deleted successfully!");
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  // Action handlers
  const openMessage = (contact) => {
    setSelectedContact(contact);
    setActiveView("message");
  };
  const openHistory = (contact) => {
    setSelectedContact(contact);
    setActiveView("history");
  };
  const openCall = (contact) => alert(`Calling ${contact.name} (${contact.phone})`);
  const openEdit = (contact) => {
    setEditContact(contact);
    setShowAddModal(true);
  };
  const openDelete = (contact) => setShowDeleteConfirm(contact);
  const openAddModal = () => {
    setEditContact(null);
    setShowAddModal(true);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 15,
        }}
      >
        <h1
          className="title"
          style={{
            color: theme === "dark" ? "#fff" : "#003366",
            margin: 0,
            fontSize: "2.2rem",
            fontWeight: "700",
          }}
        >
          📞 Contacts App
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <input
            type="text"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <button
            className="add-top-btn"
            onClick={openAddModal}
            style={{
              padding: "8px 14px",
              background: "var(--primary)",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              fontWeight: 600,
            }}
          >
            Add Contact
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {successMsg && <div className="success-popup top">{successMsg}</div>}

      {/* Layout */}
      <div className={`layout ${activeView ? "split" : "single"}`}>
        <div className="left-column">
          <ContactList
            contacts={filtered}
            onMessage={openMessage}
            onCall={openCall}
            onHistory={openHistory}
            onEdit={openEdit}
            onDelete={openDelete}
          />
        </div>

        {activeView && (
          <div className="right-panel">
            <MessagePanel
              contact={selectedContact}
              onBack={() => {
                setActiveView(null);
                setSelectedContact(null);
              }}
              type={activeView}
            />
          </div>
        )}
      </div>

      {/* Floating Buttons */}
      <div
        className="floating-buttons"
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        {/* Info */}
        <button
          className="float-btn"
          onClick={() => setShowInfoModal(true)}
          title="App Info"
          style={{
            background: "var(--primary)",
            border: "none",
            borderRadius: "50%",
            width: 46,
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <Info size={24} color="#fff" />
        </button>

        {/* Theme */}
        <button
          className="float-btn"
          onClick={toggleTheme}
          title="Toggle Theme"
          style={{
            background: "var(--primary)",
            border: "none",
            borderRadius: "50%",
            width: 46,
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {theme === "light" ? <Moon size={24} color="#fff" /> : <Sun size={24} color="#fff" />}
        </button>

        {/* Add Contact */}
        <button
          className="float-btn"
          onClick={openAddModal}
          title="Add Contact"
          style={{
            background: "var(--primary)",
            border: "none",
            borderRadius: "50%",
            width: 46,
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <Plus size={24} color="#fff" />
        </button>
      </div>

      {/* Add/Edit Contact Modal */}
      {showAddModal && (
        <AddContactModal
          onSave={handleAddOrEdit}
          onCancel={() => {
            setShowAddModal(false);
            setEditContact(null);
          }}
          contact={editContact}
        />
      )}

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="modal-backdrop">
          <div className="modal-slide" style={{ maxWidth: 400, position: "relative" }}>
            <h3 style={{ marginBottom: 20, textAlign: "center", color: "var(--text)" }}>
              Are you sure you want to delete <strong>{showDeleteConfirm.name}</strong>?
            </h3>

            <div
              className="modal-buttons"
              style={{ display: "flex", justifyContent: "center", gap: 30 }}
            >
              <button
                onClick={() => setShowDeleteConfirm(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#e74c3c",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 16px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <X size={18} /> No
              </button>

              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#2ecc71",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 16px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <CheckCircle size={18} /> Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {showInfoModal && <InfoModal onClose={() => setShowInfoModal(false)} />}
    </div>
  );
}
