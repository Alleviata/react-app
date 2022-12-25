import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function changeWord(event) {
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
  }
  return (
    <div className="wordsearch">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={changeWord} />
      </form>
    </div>
  );
}
