// Reducer.jsx
import getRandomNumber from "../../helpers/randomNumber";
import saveDataInBrowser from "../../helpers/saveDataInBrowser";

const CountReducer = () => {
  const initState = {
    numberOfAttempt: localConfig.MAX_TURN,
    fromNumber: localConfig.MIN_NUMBER,
    toNumber: localConfig.MAX_NUMBER,
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
    }
  }

  return { initState, reducer };
};

export default CountReducer;
