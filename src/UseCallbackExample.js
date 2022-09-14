import { useCallback, useState } from "react";

export function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrementCounter = useCallback(() => {
    //console.log("usecallback memorize function");
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      count:{count}
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Dncrement</button>
    </div>
  );
}
