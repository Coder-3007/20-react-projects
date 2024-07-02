import "./PopUp.css";
export default function PopUp({ id, header, body, footer, onClose }) {
  return (
    <div className="main">
      <div id={id || "PopUp"} className="PopUp">
        <div className="content">
          <div className="header">
            <span onClick={onClose} className="close-popup-icon">
              &times;
            </span>
            <h2>{header ? header : "Header"}</h2>
          </div>
          <div className="body">
            {body ? (
              body
            ) : (
              <div>
                <p>This is Our Modal Body</p>
              </div>
            )}
          </div>
          <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
        </div>
      </div>
      <hr className="line-below" />
    </div>
  );
}
