import React, { useState } from "react";
import Meaning from "./Meaning";

export default function SearchReasult(props) {
  if (props.result) {
    return (
      <div className="result">
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="result">Word not found</div>;
  }
}
