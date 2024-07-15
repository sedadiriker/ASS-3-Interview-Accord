import React, { useState } from "react";
import questions from "../helper/data.js";
import { arrowdown, arrowup } from "../helper/icons.js";

const Question = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const clickArrow = (id) => {
    setShowAnswer((prevAnswer) => ({
      ...prevAnswer,
      [id]: !prevAnswer[id],
    }));
  };
  return (
    <div className="container">
      {questions.map(({ question, id, answer }) => (
        <div className="question" key={id}>
          {id}. {question}
          <span onClick={() => clickArrow(id)} className="arrow">
            {arrowdown}
          </span>
          <p>{showAnswer[id] ? answer : ""}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;
