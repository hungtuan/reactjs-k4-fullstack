import { useConfig } from "../../config/config-context";
import getRandomNumber from "../../helpers/randomNumber";
import saveDataInBrowser from "../../helpers/saveDataInBrowser";
const { config } = useConfig();
console.log(ConfigPage);
const initState = {
  numberOfAttempt: config.MAX_NUMBER,
  fromNumber: config.MIN_NUMBER,
  toNumber: config.MAX_NUMBER,
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

export { initState };
export default reducer;
