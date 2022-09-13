import { useEffect, useState } from "react";

export function Home() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // //Type1:executes on render and  all state changes
  // useEffect(() => {
  //   console.log("use effect executing");
  // });
  //Type2:executes on render and  all dependency state changes
  // useEffect(() => {
  //   console.log("use effect executing!");
  // },[counter1]);

  //Type3:executes on render
  useEffect(() => {
    console.log("use effect executing!");
  }, []);

  return (
    <div>
      <h1>{counter1}</h1>
      <h1> {counter2}</h1>

      <button onClick={() => setCounter1(counter1 + 1)}>Increement 1</button>
      <button onClick={() => setCounter2(counter2 + 2)}>Increement 2</button>
    </div>
  );
}
