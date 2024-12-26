import React, { useEffect } from "react";

const useInterval = ({ fn, timeout }) => {
  useEffect(() => {
    const Int = setInterval(() => {
      fn();
    }, timeout);

    return clearInterval(Int);
  }, []);
};

export default useInterval;
