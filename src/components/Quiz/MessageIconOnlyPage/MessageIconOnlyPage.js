import React from "react";
import { Row } from "antd";

import "./MessageIconOnlyPage.css";
import { GhostIcon } from "../../Icons/GhostIcon";

export const MessageIconOnlyPage = ({ message }) => {
  return (
    <div>
      <Row style={{ justifyContent: "center", marginBottom: "3em" }}>
        <GhostIcon style={{ fontSize: "50px" }} />
      </Row>
      <Row> {message}</Row>
    </div>
  );
};
