import React, { useState } from "react";
import "./App.css"; // Opsional jika ingin menambahkan gaya CSS

const App = () => {
  const [text, setText] = useState("");

  // Fungsi untuk menghitung jumlah kata
  const countWords = (inputText) => {
    return inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Word Counter</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Masukkan teks di sini..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      ></textarea>
      <h3>Jumlah Kata: {countWords(text)}</h3>
    </div>
  );
};

export default App;
