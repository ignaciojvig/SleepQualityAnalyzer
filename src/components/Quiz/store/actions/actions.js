import * as asyncActionCreators from "./async.action.creators";
import * as actionCreators from "./action.creators";

export const OnStartQuiz = (userStart) =>
  asyncActionCreators.startQuizWithLoading(userStart);

export const onEndStage = () => actionCreators.endStage();

export const onAnswer = (answer) =>
  actionCreators.answerInsideStage(answer);
