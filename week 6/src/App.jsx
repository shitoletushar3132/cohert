import { memo, useMemo, useState } from "react";
import "./App.css";

let counter = 4;

function App() {
  return (
    <div>
      <CardWrapper>hi there</CardWrapper>
    </div>
  );
}

// this only re-render when the props are changes
const Header = memo(function Header({ title }) {
  console.log("called");
  return <div>{title}</div>;
});

function Todo({ title, desc }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{desc}</h5>
    </div>
  );
}

// children is gives all children which are present in the
// WrapperComponent
// CardWrapper <CardWrapper> Hello </CardWrapper/> ... hello is children
function CardWrapper({ children }) {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

const TextComponent = () => {
  return <div>Hi There</div>;
};

export default App;
