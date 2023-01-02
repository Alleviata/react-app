import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchResult from "./SearchResult";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.word);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function changeWord(event) {
    setWord(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;
    let apiKey = "563492ad6f9170000100000165cf7b733690428b91fcc1dfc3af8b1d";
    axios
      .get(pexelUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
