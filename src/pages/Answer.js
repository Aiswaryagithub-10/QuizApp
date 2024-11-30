import { useContext } from "react";
import { QuizContext } from "../context/QuizProvider";
import { questions } from "../data/question";

const Answer = () => {
  const { answer } = useContext(QuizContext);

  return (
    <div>
      <h1>Answer</h1>

      <div className="container">
        {questions.map((question, i) => {
          return (
            <div key={i} className="question-block">
              <h3>{question.text}</h3>
              <div className="options">
                {question.options.map((option, idx) => {
                  return (
                    <button
                      key={idx}
                      className={`answer-button ${
                        question.answer === idx
                          ? "correct" // Highlight correct answers
                          : answer[i] === idx
                          ? "incorrect" // Highlight incorrect user answers
                          : ""
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Answer;
