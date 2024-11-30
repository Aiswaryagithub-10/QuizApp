import React, { useContext, useEffect, useState } from "react";
import { questions } from "../data/question";  // Ensure correct import path
import { QuizContext } from "../context/QuizProvider";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { currQuesIdx, saveAnswer } = useContext(QuizContext);
  const navigate = useNavigate();
  const question = questions[currQuesIdx];



  const handleClick = (idx) => {

    const isCorrect = question.answer === idx;
    console.log("Answer Check:", {
      isCorrect,
      selectedIdx: idx,
      correctIdx: question.answer,
    });
    saveAnswer(isCorrect, idx);

    // Check if it's the last question and navigate to the result
    if (currQuesIdx === questions.length - 1) {
      navigate("/result");
    } 
  };

  const [timer, setTimer] = useState(300);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer <= 0) {
      clearInterval(timerId);
      navigate("/result");
    }

    return () => clearInterval(timerId);
  }, [timer, navigate]);

  const formatTime = (timer) => {
    const m = Math.floor(timer / 60);
    const s = timer % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!question) {
    return <h3>Loading question...</h3>;  // Handle invalid or undefined question state
  }

  return (
    <div className="container">
      <h1 className="timer">Time Left: {formatTime(timer)}</h1>
      <h3>{question.text}</h3>
      <div className="options">
        {question.options.map((option, idx) => (
          <button
            className="answer-button"
            key={idx}
            onClick={() => handleClick(idx)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
