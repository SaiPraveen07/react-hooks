import { useEffect } from "react";
import { useState } from "react";

export function UseEffectCleanupDemo() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {open && <Chat />}
      <button onClick={() => setOpen(!open)}>Toggle Chat</button>
    </div>
  );
}

function Chat() {
  useEffect(() => {
    return () => {
      alert("chat window closed");
    };
  });

  useEffect(() => {
    alert("chat window opened");
  }, []);

  return (
    <div>
      <h1>Chat Window</h1>
    </div>
  );
}
