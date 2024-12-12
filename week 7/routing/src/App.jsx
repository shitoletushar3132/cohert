import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Landing from "./components/Landing";
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/landing"
            element={
              <Suspense fallback={<>.....</>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
