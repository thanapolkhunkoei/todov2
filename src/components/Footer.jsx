import React from "react";

const Footer = ({ clear }) => {
  return (
    <div className="flex  mt-3">
      <button onClick={clear} className="btn btn-info">
        Clear All
      </button>
    </div>
  );
};

export default Footer;
