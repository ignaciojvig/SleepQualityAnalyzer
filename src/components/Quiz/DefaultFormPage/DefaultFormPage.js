import React from "react";

import { Form, Input, Button, Row } from "antd";
import { useDispatch } from "react-redux";

import { DynamicMessageOutput } from "../../DynamicMessageOutput/DynamicMessageOutput";

import * as actions from "../store/actions/actions";

export const DefaultFormPage = ({ startQuizState }) => {
  const dispatch = useDispatch();

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
    dispatch(actions.OnStartQuiz(values));
  };

  return (
    <Form onFinish={startQuiz} {...formLayout}>
      <Form.Item
        name="formItemName"
        label="Your name:"
        rules={[
          {
            required: true,
            message: "Your name is essential! Really",
          },
        ]}
      >
        <Input name="inputName" maxLength={30} />
      </Form.Item>
      <Form.Item name="gender" label="Your gender:">
        <Input
          defaultValue="I mean, why would your gender matter?"
          disabled={true}
        />
      </Form.Item>
      <Form.Item
        name="formItemAge"
        label="Your age:"
        rules={[
          {
            required: true,
            message:
              "We'll need your age too! We can't go forward without it :(",
          },
        ]}
      >
        <Input name="inputAge" type="number" min={0} max={1000} />
      </Form.Item>
      <Form.Item className="findOutButtonRow">
        <Row>
          <Button
            name="submitForm"
            loading={startQuizState.loadingState}
            htmlType="submit"
            className="findOutButton"
          >
            <DynamicMessageOutput
              staticLabel="Ready to find out?"
              activated={startQuizState.loadingState}
            />
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};
