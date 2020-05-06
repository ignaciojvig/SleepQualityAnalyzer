import React from "react";
import { useDispatch } from "react-redux";
import { Radio, Row } from "antd";

import * as actions from "../store/actions/actions";

export const BasicQuestionAndAnswer = ({ stageContent }) => {
  const dispatch = useDispatch();

  const onSelect = (alternative) => {
    dispatch(actions.onAnswer(alternative.target.value));
  };

  const alternatives = stageContent.alternatives.map((x, index) => (
    <Radio.Button key={index} value={x.value} style={{ margin: "0.5em 1em" }}>
      {x.label}
    </Radio.Button>
  ));

  return (
    <div>
      <Row style={{ justifyContent: "center", color: "white" }}>
        {stageContent.question}
      </Row>
      <Row style={{ justifyContent: "center", margin: "2em 0" }}>
        <Radio.Group onChange={onSelect}>{alternatives}</Radio.Group>
      </Row>
    </div>
  );
};
