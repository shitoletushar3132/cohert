import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import { lazy, Suspense, useContext, useState, createContext } from "react";

const Dashboard = lazy(() => import("./components/Dashboard"));

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
        <Display />
      </BrowserRouter>
    </CountContext.Provider>
  );
}

function Display() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <h1>{count}</h1>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default App;
