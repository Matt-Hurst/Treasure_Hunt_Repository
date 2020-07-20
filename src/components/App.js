import React, { useState } from "react";
import Questions from "../Questions.json";
import Start from "./Start";
import Header from "./Header";
import Question from "./Question";
import End from "./End";

function App() {
  const [question, setQuestion] = useState(Questions[0]);
  const [curQuestionNum, setCurQuestionNum] = useState(0);
  const [begin, setBegin] = useState(false);
  const [end, setEnd] = useState(false);
  const gameLength = Questions.length;

  function handleClick(textInput) {
    if (textInput.toLowerCase() === question.answer) {
      return nextQuestion();
    }
  }

  function nextQuestion() {
    //set current question answered to true
    question.answered = true;
    //if last question = true, setLastQuestion to true
    if (question.lastQuestion === true) {
      setEnd(true);
    } else {
      //set question to next question in array using find + setQuestion
      setQuestion(Questions.find(i => i.answered === false));
      setCurQuestionNum(curQuestionNum + 1);
    }
  }

  // return homepage unless begin has been clicked - if so change begin to true
  // return question page if begin = true AND end = false
  // return End page if end = true
  return (
    <div className="screen">
      <Header />
      {!begin && <Start beginClicked={setBegin} />}
      {begin && !end && (
        <Question
          submitAnswer={handleClick}
          h2={question.h2}
          p={question.paragraph}
          questionNum={curQuestionNum}
          length={gameLength}
        />
      )}
      {end && <End />}
    </div>
  );
}

export default App;
