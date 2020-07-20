import React, { useState } from "react";

function Question(props) {
  const [textInput, setTextInput] = useState("");

  function handleChange(event) {
    setTextInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      props.submitAnswer(textInput);
      setTextInput("");
    }
    event.persist();
  }

  function calcProgress() {
    const progress = (props.questionNum / props.length) * 100;
    return Math.round(progress) + "%";
  }

  return (
    <div className="container">
      <p>{props.p}</p>
      <h2>
        <i>{props.h2}</i>
      </h2>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        name="response"
        placeholder="What's the answer?"
        value={textInput}
      />
      <button
        onClick={() => {
          props.submitAnswer(textInput);
          setTextInput("");
        }}
      >
        Submit
      </button>
      <div className="progress">
        <h3>Progress: {calcProgress()}</h3>
      </div>
    </div>
  );
}
export default Question;
