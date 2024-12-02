import React, { memo, useCallback, useState } from "react";

const CallBack = () => {
  const [counter, setCounter] = useState(0);

  const logSome = useCallback(function () {
    console.log("child Clicked");
  }, []);

  return (
    <div>
      <Child inputFunction={logSome} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
};

const Child = memo(({ inputFunction }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={inputFunction}>Button Click</button>
    </div>
  );
});

export default CallBack;
