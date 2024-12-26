import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import useInterval from "./hooks/useInterval";
import useDebounce from "./hooks/useDebounce";

const useRandom = (n) => {
  const [count, setCount] = useState({
    notifications: 0,
    messagings: 0,
    jobs: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setInterval(() => {
      axios
        .get("http://localhost:3000")
        .then((res) => {
          setCount(res.data);
          setLoading(false);
        })
        .catch((err) => console.error("Failed to fetch data:", err));
    }, n * 1000);
    axios
      .get("http://localhost:3000")
      .then((res) => {
        setCount(res.data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch data:", err));

    return () => {
      clearInterval(time);
    };
  }, [n]);

  return { count, loading };
};

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const online = window.addEventListener("online", () => {
      setIsOnline(true);
    });
    const offline = window.addEventListener("offline", () => {
      setIsOnline(false);
    });
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return isOnline;
};

function App() {
  // const [count, setCount] = useState(0);

  // useInterval(() => {
  //   setCount((c) => c + 1);
  // }, 1000);
  // return <>Timer is at {count}</>;

  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <>
      Debounce value is {debouncedValue}
      <br />
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="search.."
      />
    </>
  );
}

function status() {
  const isOnline = useOnline();

  if (!isOnline) {
    return "your are offline ";
  }
  return Random();
}

function Random() {
  const { count, loading } = useRandom(5);
  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <p>note: {count.notifications}</p>
      <p>msg: {count.messagings}</p>
      <p>job: {count.jobs}</p>
    </div>
  );
}

export default App;
