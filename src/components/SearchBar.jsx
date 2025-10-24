import React from "react";

export default function SearchBar({ value, onChange, theme }) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={onChange}
      className={`w-full p-2 rounded mb-2 border ${
        theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white border-gray-600"
      }`}
    />
  );
}
