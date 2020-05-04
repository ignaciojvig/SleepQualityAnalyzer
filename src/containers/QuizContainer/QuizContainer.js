import React from "react";
import "./QuizContainer.css";

import { Card } from "antd";

import { DefaultFormPage } from "../../components/Quiz/DefaultFormPage/DefaultFormPage";
import { MessageIconOnlyPage } from "../../components/Quiz/MessageIconOnlyPage/MessageIconOnlyPage";

import { useSelector } from "react-redux";

export const QuizContainer = () => {
  const state = useSelector((state) => state);

  const contentSwitcher = () => {
    switch (state.stage) {
      case 0:
        return <DefaultFormPage startQuizState={state.startQuizState} />;
      case 1:
        return <div> 1 </div>;
      case 2:
        return <div> 2 </div>;
      case 3:
        return (
          <div>
            <MessageIconOnlyPage />
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
