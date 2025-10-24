import React from "react";
import { MessageSquare, PhoneCall, Clock, Edit2, Trash2 } from "lucide-react";

export default function ContactCard({
  contact,
  onMessage,
  onCall,
  onHistory,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="contact-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 8,
        background: "var(--card-bg)",
        marginBottom: 6,
        transition: "all 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--primary)";
        e.currentTarget.querySelectorAll("div").forEach((el) => {
          el.style.color = "#fff";
        });
        e.currentTarget.querySelectorAll("svg").forEach((el) => {
          el.style.color = "#fff";
        });
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--card-bg)";
        e.currentTarget.querySelectorAll("div").forEach((el) => {
          el.style.color = "";
        });
        e.currentTarget.querySelectorAll("svg").forEach((el) => {
          el.style.color = "";
        });
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={contact.photo}
          alt=""
          style={{ width: 40, height: 40, borderRadius: 6, objectFit: "cover" }}
        />
        <div>
          <div style={{ fontWeight: 600 }}>{contact.name}</div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            {contact.phone} | {contact.email}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 6 }}>
        <MessageSquare size={18} onClick={() => onMessage(contact)} />
        <PhoneCall size={18} onClick={() => onCall(contact)} />
        <Clock size={18} onClick={() => onHistory(contact)} />
        <Edit2 size={18} onClick={() => onEdit(contact)} />
        <Trash2 size={18} onClick={() => onDelete(contact)} />
      </div>
    </div>
  );
}
