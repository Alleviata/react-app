import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <strong>Example:</strong>&nbsp;
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
