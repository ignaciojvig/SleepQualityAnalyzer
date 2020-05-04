import * as actionTypes from "../actions/action.types";
import { getCopy } from "../../../helpers/immutability.helper";

const initialState = {
  startQuiz: {
    loadingState: false,
    started: false,
  },
};

export const quizReducer = (state = initialState, action) => {
  const stateCopy = getCopy(state);

  switch (action.type) {
    case actionTypes.STARTQUIZ:
      stateCopy.user = action.user;
      stateCopy.startQuiz = {
        loadingState: false,
        started: true,
      };

      return stateCopy;

    case actionTypes.STARTQUIZLOADING:
      stateCopy.startQuiz.loadingState = action.loadingState;
      return stateCopy;

    default:
      return state;
  }
};
