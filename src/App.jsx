import { useState } from "react";
import QRCode from "react-qr-code";

import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setWord(e.target.value);
  };
  const handleClick = () => {
    setValue(word);
  };
  return (
    <div className="main-container">
      <h2>QR code Generator</h2>
      <QRCode value={value} />
      <textarea placeholder="Enter your details..." onChange={handleChange} />
      <button onClick={handleClick}>Generate QR</button>
    </div>
  );
}

export default App;
