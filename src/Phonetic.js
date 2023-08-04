import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="no-referrer">
        {props.phonetic.text}
      </a>
    </div>
  );
}
