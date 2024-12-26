import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timeou = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => {
      clearTimeout(timeou);
    };
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
