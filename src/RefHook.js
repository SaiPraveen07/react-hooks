import { useRef, useEffect } from "react";

export function RefHook() {
  const data = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data.current.value);
    //updating
    data.current.value = "Hello World";
  };
  useEffect(() => {
    data.current.focus();
  }, []);
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type="text" placeholder="Enter your name" />
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
}
