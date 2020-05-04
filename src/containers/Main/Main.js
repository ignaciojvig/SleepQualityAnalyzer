import React from "react";

import { Row, Col } from "antd";

import { ParallaxBackground } from "../../components/ParallaxBackground/ParallaxBackground";
import { QuizContainer } from "../QuizContainer/QuizContainer";

export const Main = () => {
  return (
    <Row align="middle">
      <Col span={14}>
        <ParallaxBackground />
      </Col>
      <Col span={10}>
        <QuizContainer />
      </Col>
    </Row>
  );
};
