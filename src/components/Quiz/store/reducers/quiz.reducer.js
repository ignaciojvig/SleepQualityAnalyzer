import * as actionTypes from "../actions/action.types";
import { getCopy } from "../../../../helpers/immutability.helper";

const initialState = {
  stage: 0,
  stageContent: {},
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

const stageSwitchByAnswer = (stageIndex, answer, user) => {
  if (stageIndex === 1) {
    switch (answer) {
      case "no":
        return 4;
      case "yes":
        return 5;
      default:
        return 0;
    }
  }

  if (stageIndex === 2) {
    switch (answer) {
      case "0":
        return 6;
      case "1-2":
        return 6;
      case "3-5":
        return 6;
      case "6-8":
        if (user.age >= 18) {
          return 7;
        } else {
          return 6;
        }
      case "8-10":
        if (user.age >= 6 && user.age < 18) {
          return 7;
        } else {
          return 6;
        }
      case "11-14":
        if (user.age >= 1 && user.age < 6) {
          return 7;
        } else {
          return 6;
        }

      default:
        return 0;
    }
  }
};

const getStageContent = (stageIndex) => {
  switch (stageIndex) {
    case 1:
      return {
        question: "Are you even born yet? I mean, who would have 0 years old",
        alternatives: [
          { value: "no", label: "Nope, don't think so" },
          { value: "yes", label: "Hmmmmm, yes" },
        ],
      };
    case 2:
      return {
        question: "How many hours a day you sleep?",
        alternatives: [
          { value: "0", label: "None, i don't sleep" },
          { value: "1-2", label: "Around 1 or 2 hours" },
          { value: "3-5", label: "Between 3 and 5 hours" },
          { value: "6-8", label: "Maybe around 6 or 8 hours" },
          { value: "8-10", label: "Only a little more than 8 hours :(" },
          { value: "11-14", label: "For sure just around 11 or 14 hours :)" },
        ],
      };
    case 3:
      return {
        message:
          "This version still doesn't includes calculations for creatures that live more than 100 years, like <b> elves </b>, <b> dwarves </b>, <b> vampires </b> and <b> you ? <br/> </b> Anyway, so sorry :( <br/> In a near future we might change that! In the mean time, click on the ghost to go back!",
      };
    case 4:
      return {
        message:
          "Then you must be a spirit! <br /> And you must wait till you be born (i guess, who am i to say that?). <br/> If you want to go back, just click on the ghost!",
      };
    case 5:
      return {
        message:
          "Then you must be a newborn! <br /> You are too young to be using a computer. <br /> We're calling your mom right now! <br/> If you wan't to <strike> escape </strike> go back, just click on the ghost!",
      };
    case 6:
      return {
        message:
          "HEY <br /> You should get more sleep! Go to your bed right now! <br /> According to National Sleep Foundation, the amount of recommended hours of sleep should be as following: <br /> Children of 1 to 2 years old should get around 11 or 14 hours of sleep <br /> Children of 3 to 5 years old should get around 7 to 12 hours of sleep <br /> Children of 6 to 13 years old should get around 9 to 11 hours of sleep <br /> Teenagers of 14 to 17 years old should get around 10 hours of sleep <br /> Young Adults of 18 to 25 years old should get around 7 to 9 hours of sleep (yeah, i know, it's hard) <br /> Adults of 26 to 64 years old should also get around 7 to 9 hours of sleep <br /> Elderly of 65 years should get around 7 to 8 hours of sleep <br /> <br /> If you want to go back, just click on the ghost!",
      };

    case 7:
      return {
        message:
          " HOOOOOOO <br /> Looks like you got your time to sleep on the trails! <br /> Well done! And keep it like that! <br /> If you wan't to go back to play again or check another answers, just click on the ghost! ",
      };
    default:
      return {};
  }
};

export const quizReducer = (state = initialState, action) => {
  const stateCopy = getCopy(state);

  switch (action.type) {
    case actionTypes.STARTQUIZ:
      stateCopy.user = action.user;
      stateCopy.stage = stageSwitchByAge(parseInt(action.user.age));
      stateCopy.stageContent = getStageContent(stateCopy.stage);

      stateCopy.startQuizState = {
        loadingState: false,
      };

      return stateCopy;

    case actionTypes.STARTQUIZLOADING:
      stateCopy.startQuizState.loadingState = action.loadingState;
      return stateCopy;

    case actionTypes.ENDSTAGE:
      stateCopy.stage = 0;
      stateCopy.stateContent = {};

      return stateCopy;

    case actionTypes.ANSWERINSIDESTAGE:
      stateCopy.stage = stageSwitchByAnswer(
        stateCopy.stage,
        action.answer,
        stateCopy.user
      );
      stateCopy.stageContent = getStageContent(stateCopy.stage);

      return stateCopy;

    default:
      return state;
  }
};
