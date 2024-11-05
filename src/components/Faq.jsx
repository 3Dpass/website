import React, { useRef, useEffect, useState } from "react";
import "../styles/faq.css";

const Faq = ({ title, description, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="faq-holder">
      <div
        className={isOpen ? "faq-title active" : "faq-title"}
        onClick={onToggle}
      >
        {title}
        <div className="arrow-faq"></div>
      </div>
      <div
        ref={contentRef}
        className="faq-description"
        style={{
          height: contentHeight,
          overflow: "hidden",
          transition: "height 0.4s ease, opacity 0.4s ease",
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? "20px 30px" : "0 30px",
        }}
        dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }}
      ></div>
    </div>
  );
};

export default Faq;
