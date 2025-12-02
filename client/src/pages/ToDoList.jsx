import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";
import "../styles/todolist.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function ToDoList({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [items, setItems] = useState({});
  const [text, setText] = useState("");

  // Load all items
  const loadItems = async () => {
    const token = await auth.currentUser.getIdToken();

    const res = await fetch(`${API_URL}/api/todo`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setItems(data || {});
  };

  // Add item
  const addItem = async () => {
    if (!text.trim()) return;

    const token = await auth.currentUser.getIdToken();

    await fetch(`${API_URL}/api/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    });

    setText("");
    loadItems();
  };

  // Delete item
  const deleteItem = async (id) => {
    const token = await auth.currentUser.getIdToken();

    await fetch(`${API_URL}/api/todo/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="shopping-container">
      <Sidebar
        user={user}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="shopping-content">
        <h1>My To-Do List</h1>

        <div className="shopping-input-row">
          <input
            className="shopping-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className="shopping-add-btn" onClick={addItem}>
            Add
          </button>
        </div>

        <ul className="shopping-list">
          {Object.entries(items).map(([id, item]) => (
            <li key={id} className="shopping-item">
              <span>{item.text}</span>
              <button
                className="shopping-delete-btn"
                onClick={() => deleteItem(id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
