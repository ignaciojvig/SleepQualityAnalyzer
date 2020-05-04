import React from "react";
import "./StagedForm.css";

import { Card, Form, Input, Button, Row } from "antd";

import * as actions from "./actions/actions";
import { useSelector, useDispatch } from "react-redux";

export const StagedForm = () => {
  const dispatch = useDispatch();
  const startQuizState = useSelector((state) => state.startQuiz);

  const formLayout = {
    labelCol: {
      offset: 1,
      span: 5,
    },
    wrapperCol: {
      offset: 1,
      span: 16,
    },
  };

  const startQuiz = (values) => {
    console.log(values);
    dispatch(actions.OnStartQuiz(values));
  };

  return (
    <div className="stagedForm">
      <Card
        title="So, let's see how well are you sleeping?"
        style={{ width: "90%", height: "100%", backgroundColor: "#483475" }}
      >
        <Form onFinish={startQuiz} {...formLayout}>
          <Form.Item
            name="name"
            label="Your name:"
            rules={[
              {
                required: true,
                message: "Your name is essential! Really",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Your gender:">
            <Input
              defaultValue="I mean, why would your gender matter?"
              disabled={true}
            />
          </Form.Item>
          <Form.Item
            name="age"
            label="Your age:"
            rules={[
              {
                required: true,
                message:
                  "We'll need your age too! We can't go forward without it :(",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="findOutButtonRow">
            <Row>
              <Button
                loading={startQuizState.loadingState}
                htmlType="submit"
                className="findOutButton"
              >
                Ready to find out?
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
