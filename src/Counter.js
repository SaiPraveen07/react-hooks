import { useEffect, useState } from "react";

//usestate hooks()
export function Counter() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const onClickListenerX = () => {
    setX(x + 1);
  };
  const onClickListenerY = () => {
    setY(y + 1);
  };
  useEffect(
    function () {
      //console.log("hello" + y);
      document.title = "use effect counted" + y + "times";
    },
    [y]
  );

  useEffect(
    function () {
      //console.log("hello" + x);
      document.title = "use effect counted" + x + "times";
    },
    [x]
  );
  // useEffect(function () {
  //   //console.log("hello" + x);
  //   alert("hello")
  // }, []);
  return (
    <div>
      {" "}
      <h1>Count:{x}</h1>
      <h1>Count:{y}</h1>
      <button onClick={onClickListenerX}>Increment X</button>
      <button onClick={onClickListenerY}>Increment Y</button>
    </div>
  );
}
