import QRCode from "react-qr-code";
import "./styles.css";
import { useState } from "react";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    // in here we have to instlal react qrcode  third party library

    <div>
      <h1 className="heading">QR Code Generator App</h1>
      <div className="main">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="Qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          className="btn"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="qrcode">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
      <hr className="line-below" />
    </div>
  );
}
