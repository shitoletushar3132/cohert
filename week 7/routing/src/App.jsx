import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <Display />
    </RecoilRoot>
  );
}

function Display() {
  console.log("render");
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <h1>{count}</h1>
      <ITISEVEN />
    </div>
  );
}

function ITISEVEN() {
  const count = useRecoilValue(evenSelector);
  console.log("prin");
  return <p>{count % 2 == 0 ? "it is even" : ""}</p>;
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </>
  );
}

export default App;
