import './bg.css'
import React, { useState, useEffect } from "react";

function BG(){

	const lines = [
    "Mining resources for our community!",
    "Empowering learners with every click!",
    "Fueling your academic journey together!",
    "Bringing knowledge to your fingertips!",
    "Curating the best for curious minds!"
  ];

  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 70;
    const deletingSpeed = 40;
    const pauseAfterTyping = 2000;

    let timeout;

    if (!isDeleting && charIndex < lines[lineIndex].length) {
      timeout = setTimeout(() => {
        setText(lines[lineIndex].substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === lines[lineIndex].length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } else if (isDeleting && charIndex > 0) {
      // Deleting characters
      timeout = setTimeout(() => {
        setText(lines[lineIndex].substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Done deleting, move to next line
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, lines]);

	return(
		<div className="bg_container">
			<div className="bg_inner_container">
				<h1><span className="h1">Code</span><span className="h2">Mine</span></h1>
				<p className="typing-text">
          {text}
          <span className="cursor">|</span>
        </p>
			</div>
		</div>
	)

}

export default BG;