import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log("Recevied message ", message.data);
      setMessage(message.data);
    };

    return () => socket.close();
  }, []);

  if (!socket) {
    return <div>connecting...!!</div>;
  }
  let s = 0;
  return (
    <>
      <input />
      <button
        onClick={() => {
          socket.send(`hello  , ${++s}`);
        }}
      >
        send
      </button>
      {message}
    </>
  );
}

export default App;
