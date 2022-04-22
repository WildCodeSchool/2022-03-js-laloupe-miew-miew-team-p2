import { useState, useEffect } from "react";
import wait from "./waitFunction";

const useTypedMessage = (message) => {
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    setTypedMessage("");

    if (message.length) {
      (async () => {
        let visibleMessage = "";

        for (let i = 0; i < message.length; i += 1) {
          await wait(25);
          visibleMessage += message[i];
          setTypedMessage(visibleMessage);
        }
      })();
    }
  }, [message]);

  return typedMessage;
};

export default useTypedMessage;
