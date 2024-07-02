// We are creating a reUsable component
import "./PopUp.css";
import { useState } from "react";
import PopUp from "./PopUp";

export default function PopUpTest() {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  function handleToggleModalPopUP() {
    setShowModalPopUp(!showModalPopUp);
  }

  function onClose() {
    setShowModalPopUp(false);
  }

  return (
    <div className="main">
      <h1 className="heading">Scroll Indicator App</h1>
      <button className="btn" onClick={handleToggleModalPopUP}>
        Open Model Popup
      </button>
      {showModalPopUp && (
        <PopUp onClose={onClose} body={<div>Customized Body</div>} />
      )}
    </div>
  );
}
