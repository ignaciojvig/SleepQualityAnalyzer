import * as actionTypes from "./action.types";
import * as actionCreators from "./action.creators";

import { loadingDispatch } from "../../../store/utility-actions/utility.action.creators";

export const startQuizWithLoading = (userStart) => {
  return (dispatch) => {
    dispatch(loadingDispatch(actionTypes.STARTQUIZLOADING, true));

    setTimeout(() => {
      dispatch(actionCreators.startQuiz(userStart));
    }, 12000);
  };
};
