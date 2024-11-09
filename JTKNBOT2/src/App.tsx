import { useState } from "react";
import "./App.css";
import axios from "axios";

// Fungsi untuk mengirim pesan ke Telegram
const sendMessage = async (message) => {
  const token = "7905610652:AAFNfLTQi3Xsg7EzqVYQpPMuXpYXs3fDzcY"; // Ganti dengan token bot Anda
  const chatId = "1851304813"; // Ganti dengan chat ID Anda
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: chatId,
      text: message,
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  // Fungsi untuk menangani pengiriman pesan
  const handleSendMessage = async () => {
    if (message.trim() === "") return; // Validasi agar tidak mengirim pesan kosong
    await sendMessage(message);
    setResponse("Pesan terkirim!");
    setMessage(""); // Reset input setelah pesan terkirim
  };

  return (
    <div className="App">
      <h1>Mini Telegram App</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tulis pesan..."
      />
      <button onClick={handleSendMessage}>Kirim Pesan</button>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
