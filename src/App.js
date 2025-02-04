import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((ele, ind) => {
      return id !== ind;
    });
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <h1>Hello </h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addItems}>Add</button>
      {items.map((ele, index) => {
        return (
          <div key={index}>
            <h1 key={index}>{ele}</h1>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
