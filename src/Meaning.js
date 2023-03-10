import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <ul>
                <li>
                  {definition.definition}
                  <br />
                  <Example example={definition.example} />

                  <Synonyms synonyms={definition.synonyms} />
                </li>
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}
