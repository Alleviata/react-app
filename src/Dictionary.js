import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function changeWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    alert("response.data");
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="wordsearch">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={changeWord} />
      </form>
      <p>Looking for {word}</p>
    </div>
  );
}
