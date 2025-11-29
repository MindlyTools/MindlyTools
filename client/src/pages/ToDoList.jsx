import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";
import "../styles/todolist.css";

export default function ToDoList({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [items, setItems] = useState({});
  const [text, setText] = useState("");

  const loadItems = async () => {
    const token = await auth.currentUser.getIdToken();

    const res = await fetch("http://localhost:5000/api/todolist", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setItems(data || {});
  };

  const addItem = async () => {
    if (!text.trim()) return;
    const token = await auth.currentUser.getIdToken();

    await fetch("http://localhost:5000/api/todolist", {
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

  const deleteItem = async (id) => {
    const token = await auth.currentUser.getIdToken();

    await fetch(`http://localhost:5000/api/todolist/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        user={user}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div style={{ flex: 1, padding: "40px", color: "white" }}>
        {/* change the name if needed */}
        <h1>Basic Test List</h1>

        <div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add an item..."
          />
          <button onClick={addItem}>Add</button>
        </div>

        <ul>
          {Object.entries(items).map(([id, item]) => (
            <li key={id}>
              {item.text}
              <button onClick={() => deleteItem(id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
