import React from "react";
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
    return (
      <div className="result">Type an existing word to see its details</div>
    );
  }
}
