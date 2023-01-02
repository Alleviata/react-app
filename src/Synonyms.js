import React from "react";

export default function Synonyms(props) {
  if (props.synonyms[0]) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <span>
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}>&nbsp;{synonym};</span>;
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
