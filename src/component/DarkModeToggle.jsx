import React, { useState } from "react";

// styles
import "./Toggle.css";

const DarkModeToggle = ({ toggle }) => {
  return (
    <div className="toggle-effect">
      <p className="toggle-button" onClick={toggle}>
        Toggle Dark
        {/* <i className="fas fa-moon"></i> */}
      </p>
    </div>
  );
};

export default DarkModeToggle;
