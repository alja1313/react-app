import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Coded By{" "}
        <a
          href="https://github.com/alja1313"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olga Slahota
        </a>{" "}
        | Hosted on{" "}
        <a
          href="https://github.com/alja1313/react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        &{" "}
        <a
          href="https://react-app-trial.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
export default Footer;
