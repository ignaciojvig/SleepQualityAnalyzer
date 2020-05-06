import React from "react";
import { Row } from "antd";
import { useSpring, animated } from "react-spring";

import { GhostIcon } from "../../components/Icons/GhostIcon";

export const FallbackWidthPage = () => {
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
    <div style={{ marginTop: "3em" }}>
      <Row style={{ justifyContent: "center", marginBottom: "3em" }}>
        <animated.div style={{ transform: radians.interpolate(interp(1)) }}>
          <GhostIcon style={{ fontSize: "50px" }} />
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
          <p> Sorry Buddy :( </p>
          <p>
            This page currently can only be viewed in Notebooks or Desktop
            Computers.
          </p>
          <p>
            Maybe in a near future we might adapt this layout for mobile devices
            also!
          </p>
          <p> In the mean time, stay with this ghost :) </p>
          <p> (Don't look him in the eyes) </p>
        </div>
      </Row>
    </div>
  );
};
