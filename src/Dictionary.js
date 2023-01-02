import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchResult from "./SearchResult";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.word);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function changeWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="wordsearch">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={changeWord}
              placeholder="Type your word here..."
            />
          </form>
          <SearchResult result={result} />
        </section>
      </div>
    );
  } else {
    load();
  }
}
