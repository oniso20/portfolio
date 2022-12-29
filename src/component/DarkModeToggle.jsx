import React, { useState } from "react";

const DarkModeToggle = ({ toggle }) => {
  return (
    <p className="toggle-button" onClick={toggle}>
      Toggle Dark
      {/* <i className="fas fa-moon"></i> */}
    </p>
  );
};

export default DarkModeToggle;
