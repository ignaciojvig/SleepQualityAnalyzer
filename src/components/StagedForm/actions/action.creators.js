import * as actionTypes from "./action.types";

export const startQuiz = (userStart) => {
  return {
    type: actionTypes.STARTQUIZ,
    user: userStart,
  };
};
