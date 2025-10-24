import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddContact({
  show,
  onClose,
  onSave,
  theme,
  initialData = null,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setPhone(initialData.phone);
      setPhoto(initialData.photo);
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setPhoto("");
    }
  }, [initialData, show]);

  if (!show) return null;

  const handleSave = () => {
    if (!name) return alert("Name is required");
    onSave({ name, email, phone, photo });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-30">
      <div
        className={`mt-10 w-96 p-4 rounded-md shadow-lg transition-transform transform ${
          theme === "light" ? "bg-white" : "bg-gray-800 text-white"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Contact Details</h2>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="space-y-2">
          <input
            className="w-full p-2 rounded border"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-2 rounded border"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full p-2 rounded border"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="w-full p-2 rounded border"
            type="text"
            placeholder="Profile Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded border hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
