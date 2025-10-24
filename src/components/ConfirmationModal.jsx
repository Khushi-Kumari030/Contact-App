import React from "react";

export default function ConfirmationModal({ show, message, onYes, onNo, theme }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div
        className={`p-4 rounded-md w-80 ${
          theme === "light" ? "bg-white" : "bg-gray-800 text-white"
        }`}
      >
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-2">
          <button
            className="px-3 py-1 rounded border hover:bg-gray-200"
            onClick={onNo}
          >
            No
          </button>
          <button
            className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            onClick={onYes}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
