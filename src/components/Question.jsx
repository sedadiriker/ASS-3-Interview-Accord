import React from 'react'
import questions from "../helper/data"

const Question = () => {
  return (
    <div className="container">
      {
        questions.map(({question,id}) => (
            <p className="question" key={id}>{id}. {question}</p>
        ))
      }
    </div>
  )
}

export default Question
