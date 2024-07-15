import React from "react";
import questions from "../helper/data.js";
import { arrowdown, arrowup } from "../helper/icons.js";

const Question = () => {
  return (
    <div className="container">
      {questions.map(({ question, id }) => (
        <p className="question" key={id}>
          {id}. {question}
          <span className="arrow">{arrowdown}</span>
        </p>
      ))}
    </div>
  );
};

export default Question;
