import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchResult from "./SearchResult";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [result, setResult] = useState(null);
  function changeWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
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
      <SearchResult result={result} />
    </div>
  );
}
