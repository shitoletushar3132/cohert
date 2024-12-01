import { memo, useMemo, useState } from "react";
import "./App.css";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "hello", desc: "goo" },
    { id: 2, title: "hello2", desc: "goo2" },
    { id: 3, title: "hello3", desc: "goo3" },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      { id: counter++, title: Math.random(), desc: Math.random() },
    ]);
  }
  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => (
        <Todo title={todo.title} desc={todo.desc} key={todo.id} />
      ))}
    </>
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

export default App;
