import { useEffect } from "react";
import { RecoilRoot, useSetRecoilState } from "recoil";
import Router from "./routes/Router";
import { authAtom } from "./store/atoms/authAtom";

function App() {
  return <Router />;
}

export default App;
