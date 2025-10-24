# Contacts App

A modern, interactive **Contacts management app** built with **React** and **Vite**, featuring a responsive interface, light/dark theme support, and realistic Indian contact data.

---

## Features

- **Contact List**
  - Displays **name, phone, email, and profile photo** for each contact
  - **Alphabetically sorted** contacts
  - Quick **action icons**: Message, Call, History, Edit, Delete
  - **Hover effects** with theme-aware colors

- **Search**
  - Search contacts by **name** in real-time

- **Add / Edit Contact**
  - Add new contacts via a **top-sliding modal**
  - Edit existing contact details
  - Fields include: **Profile Photo, Name, Phone, Email**
  - Shows **default avatar** if no photo is provided
  - **Confirmation popups** on add/edit

- **Delete Contact**
  - Confirmation modal with **Yes/No icons**
  - Deletes selected contact from list

- **Messaging & History Panels**
  - Clicking **Message** or **History** opens a **side panel**
  - Shows contact info (photo & name)
  - Message panel includes a **typing box** and default prompt
  - History panel displays past interactions

- **Theme Toggle**
  - Switch between **Light and Dark theme**
  - Theme-aware UI elements (icons, backgrounds, text)

- **Floating Action Buttons**
  - **Add Contact** and **Theme Toggle** buttons on bottom-right
  - **Info button** shows app features in a modal

---

## Tech Stack

- **Frontend:** React, Vite, JavaScript  
- **Styling:** CSS with theme variables  
- **Icons:** Lucide React  
- **Mock API:** Simulates contact data (`src/api/mockApi.js`)  

---

## Project Structure
my-project/
├─ public/
├─ src/
│ ├─ api/
│ │ └─ mockApi.js
│ ├─ components/
│ │ ├─ AddContactModal.jsx
│ │ ├─ ContactCard.jsx
│ │ ├─ ContactList.jsx
│ │ ├─ DeleteConfirmModal.jsx
│ │ ├─ InfoModal.jsx
│ │ ├─ MessagePanel.jsx
│ │ ├─ SearchBar.jsx
│ │ └─ ThemeToggle.jsx
│ ├─ styles/
│ │ └─ theme.css
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ package.json
└─ README.md

