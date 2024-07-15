import React, { useState } from "react";
import questions from "../helper/data.js";
import { arrowdown, arrowup } from "../helper/icons.js";

const Question = () => {
  const [show, setShow] = useState(false);

  const clickArrow = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      {questions.map(({ question, id, answer }) =>
        show ? (
          <div className="question" key={id}>
            {id}. {question}
            <span onClick={clickArrow} className="arrow">{arrowdown}</span>
            <p>{answer}</p>
          </div>
        ) : (
          <div className="question" key={id}>
            {id}. {question}
            <span onClick={clickArrow} className="arrow">{arrowdown}</span>
          </div>
        )
      )}
    </div>
  );
};

export default Question;
