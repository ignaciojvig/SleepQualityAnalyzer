import React from "react";
import { Row } from "antd";
import { useSpring, animated } from "react-spring";
import ReactHtmlParser from "react-html-parser";
import { useDispatch } from "react-redux";

import { GhostIcon } from "../../Icons/GhostIcon";

import * as actions from "../store/actions/actions";

export const MessageIconOnlyPage = ({ stageContent }) => {
  const dispatch = useDispatch();

  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });

  const interp = (i) => (r) =>
    `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

  return (
    <div>
      <Row style={{ justifyContent: "center", marginBottom: "3em" }}>
        <animated.div style={{ transform: radians.interpolate(interp(1)) }}>
          <GhostIcon
            style={{ fontSize: "50px" }}
            onClick={() => dispatch(actions.onEndStage())}
          />
        </animated.div>
      </Row>
      <Row>
        <div
          style={{
            color: "whitesmoke",
            padding: "0 1em",
            marginBottom: "1em",
            width: "100%",
          }}
        >
          {ReactHtmlParser(stageContent.message)}
        </div>
      </Row>
    </div>
  );
};
