import React from "react";
import { useState, useEffect } from "react";

const messages = [
  "Stealing books of witchcraft from witches",
  "Tossing a coin to the witchers",
  "Running from werewolves",
  "Asking an Oracle about the destiny",
  "Breaking into Hogwarts Library",
  "Calling Van Helsing",
  "Drinking wine with a guy called Dracula",
  "Building our own scarecrow",
  "Braiding beards from dwarves",
  "Moving our mimic to the attic",
  "Feeding our baby cerberus",
  "Animating my carved halloween pumpkin",
];

export const DynamicMessageOutput = ({ staticLabel, activated = false }) => {
  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const [messageInterval, setMessageInterval] = useState();
  const [outputMessage, setOutputMessage] = useState(staticLabel);

  useEffect(() => {
    if (!messageInterval && activated) {
      setMessageInterval(
        setInterval(() => {
          const message = getRandomMessage();
          console.log(message);
          setOutputMessage(message);
        }, 2000)
      );
    }

    if (messageInterval && !activated) {
      clearInterval(messageInterval);
      setMessageInterval();
      setOutputMessage(staticLabel);
    }

    return () => {
      if (messageInterval) {
        clearInterval(messageInterval);
      }
    };
  }, [messageInterval, activated, staticLabel]);

  return <span>{outputMessage}</span>;
};
