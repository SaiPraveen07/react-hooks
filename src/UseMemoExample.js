import { useMemo, useState } from "react";

export function UseMemoExample() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);
  const Factorial = useMemo(() => fact(number), [number]);
  return (
    <center>
      Factorial: {Factorial} <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter Increment
      </button>{" "}
      <br />
      <button onClick={() => setNumber(number + 1)}>
        Number Increment
      </button>{" "}
      <br />
      counter:{counter}
    </center>
  );
}
const fact = (n) => {
  let answer = 1;
  for (var i = n; i >= n; i--) {
    answer = answer * i;
  }
  console.log("Factorial function calling");
  return answer;
};
