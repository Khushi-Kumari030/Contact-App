import React, { useState, useEffect } from "react";
import { X, CheckCircle, User } from "lucide-react";
import "../styles/theme.css";

export default function AddContactModal({ onSave, onCancel, contact }) {
  const [form, setForm] = useState({
    id: contact?.id || Date.now(),
    name: contact?.name || "",
    email: contact?.email || "",
    phone: contact?.phone || "",
    photo: contact?.photo || "",
  });

  const [preview, setPreview] = useState(contact?.photo || "");

  useEffect(() => {
    if (form.photo.trim() === "") {
      setPreview("");
    } else {
      setPreview(form.photo);
    }
  }, [form.photo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone)
      return alert("Please fill all required fields");

    const finalPhoto =
      form.photo && form.photo.trim() !== "" ? form.photo : "default";
    onSave({ ...form, photo: finalPhoto });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-slide add-modal">
        <div className="modal-header">
          <h2>{contact ? "Edit Contact" : "Add New Contact"}</h2>
          <button className="icon-btn close-btn" onClick={onCancel}>
            <X size={24} />
          </button>
        </div>

        {/* Profile Photo Preview */}
        <div className="profile-preview">
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              onError={() => setPreview("")}
            />
          ) : (
            <div className="default-avatar">
              <User size={48} color="var(--primary)" />
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="add-form">
          <label>Profile Photo URL:</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter image URL (optional)"
            value={form.photo}
            onChange={handleChange}
          />

          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <div className="form-buttons">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              <X size={18} /> Cancel
            </button>
            <button type="submit" className="save-btn">
              <CheckCircle size={18} /> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
