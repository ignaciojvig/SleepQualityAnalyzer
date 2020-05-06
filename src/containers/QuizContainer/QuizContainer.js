import React from "react";
import "./QuizContainer.css";

import { Card } from "antd";

import { DefaultFormPage } from "../../components/Quiz/DefaultFormPage/DefaultFormPage";
import { MessageIconOnlyPage } from "../../components/Quiz/MessageIconOnlyPage/MessageIconOnlyPage";
import { BasicQuestionAndAnswer } from "../../components/Quiz/BasicQuestionAndAnswer/BasicQuestionAndAnswer";

import { useSelector } from "react-redux";

export const QuizContainer = () => {
  const state = useSelector((state) => state);

  const contentSwitcher = () => {
    switch (state.stage) {
      case 0:
        return <DefaultFormPage startQuizState={state.startQuizState} />;
      case 1:
        return <BasicQuestionAndAnswer stageContent={state.stageContent} />;
      case 2:
        return <BasicQuestionAndAnswer stageContent={state.stageContent} />;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return (
          <div>
            <MessageIconOnlyPage stageContent={state.stageContent} />
          </div>
        );
      default:
        return <DefaultFormPage startQuizState={state.startQuizState} />;
    }
  };

  return (
    <div className="stagedForm">
      <Card
        title="So, let's see how well are you sleeping?"
        style={{ width: "90%", height: "100%", backgroundColor: "#483475" }}
      >
        {contentSwitcher()}
      </Card>
    </div>
  );
};
