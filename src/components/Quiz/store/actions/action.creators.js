import * as actionTypes from "./action.types";

export const startQuiz = (userStart) => {
  return {
    type: actionTypes.STARTQUIZ,
    user: userStart,
  };
};

export const endStage = () => {
  return {
    type: actionTypes.ENDSTAGE,
  };
};

export const answerInsideStage = (answer) => {
  return {
    type: actionTypes.ANSWERINSIDESTAGE,
    answer: answer,
  };
};
