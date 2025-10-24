import React, { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

export default function MessagePanel({ contact, onBack, type }) {
  const [msg, setMsg] = useState("");

  return (
    <div
      className="message-panel"
      style={{ display: "flex", flexDirection: "column", height: "100%", padding: 10 }}
    >
      {/* Header */}
      <div
        className="msg-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={contact.photo}
            alt=""
            style={{ width: 50, height: 50, borderRadius: 8, objectFit: "cover" }}
          />
          <div style={{ fontWeight: 600, color: "var(--text)" }}>{contact.name}</div>
        </div>
        <ArrowLeft
          size={24}
          onClick={onBack}
          style={{ cursor: "pointer", color: "var(--primary)" }}
        />
      </div>

      {/* Body */}
      <div
        className="msg-body"
        style={{ flex: 1, overflowY: "auto", marginBottom: 10 }}
      >
        {type === "message" ? (
          <p style={{ color: "var(--muted)" }}>Start your new conversation</p>
        ) : (
          <p style={{ color: "var(--muted)" }}>
            Call and message history will appear here
          </p>
        )}
      </div>

      {/* Typing box only for message panel */}
      {type === "message" && (
        <div
          className="msg-footer"
          style={{
            display: "flex",
            gap: 8,
            position: "sticky",
            bottom: 0,
            background: "inherit",
            paddingTop: 5,
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            style={{
              flex: 1,
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ccc",
              background: "var(--card-bg)",
              color: "var(--text)",
            }}
          />
          <Send
            size={24}
            onClick={() => setMsg("")}
            style={{ cursor: "pointer", color: "var(--primary)" }}
          />
        </div>
      )}
    </div>
  );
}
