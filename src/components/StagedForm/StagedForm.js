import React from "react";
import "./StagedForm.css";

import { Card, Form, Input, Button, Row } from "antd";

export const StagedForm = () => {
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

  return (
    <div className="stagedForm">
      <Card
        title="So, let's see how well are you sleeping?"
        style={{ width: "90%", height: "100%", backgroundColor: "#483475" }}
      >
        <Form {...formLayout}>
          <Form.Item
            name="note"
            label="Your name:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="note" label="Your gender:">
            <Input
              defaultValue="I mean, why would your gender matter? Just keep going!"
              disabled={true}
            />
          </Form.Item>
          <Form.Item
            name="note"
            label="Your age:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
        <Row className="findOutButtonRow">
          <Button className="findOutButton"> Ready to find out? </Button>
        </Row>
      </Card>
    </div>
  );
};
