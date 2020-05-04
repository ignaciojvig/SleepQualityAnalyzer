import * as asyncActionCreators from "./async.action.creators";

export const OnStartQuiz = (userStart) =>
  asyncActionCreators.startQuizWithLoading(userStart);
