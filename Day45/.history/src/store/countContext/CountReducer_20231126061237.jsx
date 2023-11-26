// CountReducer.jsx
import React from "react";
import { useSelector } from "react-redux";
import getRandomNumber from "../../helpers/randomNumber";
import saveDataInBrowser from "../../helpers/saveDataInBrowser";

const data = { MAX_TURN: 7, MIN_NUMBER: 1, MAX_NUMBER: 100 };

const CountReducer1 = () => {
  const maxNumber = useSelector((state) => state.MAX_NUMBER);
  console.log(maxNumber);
  return <div></div>;
};

function CountReducer() {
  const initState = {
    numberOfAttempt: data.MAX_TURN,
    fromNumber: data.MIN_NUMBER,
    toNumber: data.MAX_NUMBER,
    randomNumber: 0,
    history: JSON.parse(localStorage.getItem("history")) || [],
  };

  function reducer(state, action) {
    switch (action.type) {
      case "question/submit":
        let data = 0;
        if (action.payload?.numberOfAttempt) {
          data = action.payload.numberOfAttempt;
        } else if (action.payload?.numberOfAttempt === 0) {
          data = 0;
        } else {
          data = state.numberOfAttempt - 1;
        }
        return {
          ...state,
          numberOfAttempt: data,
        };
      case "randomNumber/renew":
        return {
          ...state,
          randomNumber: getRandomNumber(state.fromNumber, state.toNumber),
        };
      case "history/add":
        const dataHistory = [
          {
            id: state.history.length + 1,
            answers: action.payload.dataAnswers,
            correctAnswer: action.payload.randomNumber,
          },
          ...state.history,
        ];
        saveDataInBrowser("history", dataHistory);
        return {
          ...state,
          history: dataHistory,
        };
      case "history/clear":
        localStorage.removeItem("history");
        return {
          ...state,
          history: [],
        };
      default:
        return state;
    }
  }

  return { initState, reducer };
}

export default CountReducer;