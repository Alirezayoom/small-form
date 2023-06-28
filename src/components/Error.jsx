import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onConfirm }) => (
  <div
    onClick={onConfirm}
    style={{
      backgroundColor: "#222b",
      left: 0,
      top: 0,
      position: "absolute",
      width: "100vw",
      height: "100vh",
      display: "grid",
      placeContent: "center",
      zIndex: 99,
    }}
  ></div>
);

const ModalOverlay = ({ onConfirm }) => {
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "300px",
      display: "block",
      backgroundColor: "#333",
      zIndex: 100,
    }}
  >
    <div style={{ padding: "1rem" }}>{title}</div>
    <div style={{ height: "150px", padding: "1rem", backgroundColor: "#444" }}>
      {message}
    </div>
    <div
      onClick={onConfirm}
      style={{
        padding: "1rem",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      Close
    </div>
  </div>;
};

const Error = ({ title, message, onConfirm }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Error;
