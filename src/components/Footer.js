import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#121212",
        height: "500px",
        width: "100%",
        color: "#fff",
        position: "relative",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        DwarfINC.
      </h1>
    </div>
  );
};

export default Footer;
