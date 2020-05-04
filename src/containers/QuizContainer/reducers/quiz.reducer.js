import * as actionTypes from "../actions/action.types";
import { getCopy } from "../../../helpers/immutability.helper";

const initialState = {
  stage: 0,
  startQuizState: {
    loadingState: false,
    started: false,
  },
};

const stageSwitchByAge = (age) => {
  if (age < 1) {
    return 1;
  } else if (age <= 100) {
    return 2;
  } else {
    return 3;
  }
};

export const quizReducer = (state = initialState, action) => {
  const stateCopy = getCopy(state);

  switch (action.type) {
    case actionTypes.STARTQUIZ:
      stateCopy.user = action.user;
      stateCopy.stage = stageSwitchByAge(parseInt(action.user.age));

      console.log(stageSwitchByAge(parseInt(action.user.age)));

      stateCopy.startQuizState = {
        loadingState: false,
      };

      return stateCopy;

    case actionTypes.STARTQUIZLOADING:
      stateCopy.startQuizState.loadingState = action.loadingState;
      return stateCopy;

    default:
      return state;
  }
};
