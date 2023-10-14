import "../styles/faq.css";

import React, { useState } from "react";

const Faq = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-holder">
      <div
        className={isOpen ? "faq-title active" : "faq-title"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <div className="arrow-faq"></div>
      </div>
      {isOpen && (
        <div
          className="faq-description"
          dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }}
        ></div>
      )}
    </div>
  );
};

export default Faq;
