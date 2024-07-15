import React, { useState } from "react";
import questions from "../helper/data.js";
import { arrowdown, arrowup } from "../helper/icons.js";

const Question = () => {
  const [showAnswer, setShowAnswer] = useState({});
  const [icon, setIcon] = useState(arrowdown);

  const clickArrow = (id) => {
    setShowAnswer((prevAnswer) => ({
      ...prevAnswer,
      [id]: !prevAnswer[id],
    }));
    setIcon(!icon);
  };
  return (
    <div className="container">
      {questions.map(({ question, id, answer }) => (
        <div className="question" key={id}>
          <p>
            {id}. {question}
            <span onClick={() => clickArrow(id)} className="arrow">
              {showAnswer[id] ? arrowup : arrowdown}
            </span>
          </p>
          <p className="answer">{showAnswer[id] ? answer : ""}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;
