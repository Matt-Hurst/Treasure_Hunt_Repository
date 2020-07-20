import React from "react";

function Start(props) {
  function beginGame() {
    props.beginClicked(true);
  }

  return (
    <div className="container">
      <h1 className="start-h1">It's Time For A Treasure Hunt!</h1>
      <p>When you are ready to begin your hunt, click "Let's do this!".</p>
      <button onClick={beginGame} variant="contained" size="large">
        Let's do this
      </button>
    </div>
  );
}

export default Start;
