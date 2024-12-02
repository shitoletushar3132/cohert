import { useEffect, useMemo, useState } from "react";
const UseMemo = () => {
  const [input, setInputValue] = useState(1);
  const [counter, setCounter] = useState(0);

  let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= input; i++) {
      count = count + i;
    }
    console.log("call");
    return count;
  }, [input]);

  return (
    <div>
      <input
        placeholder="enter Number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        Sum is {input} value is {count}
      </p>
      <button onClick={() => setCounter(counter + 1)}>Counter{counter}</button>
    </div>
  );
};

export default UseMemo;
