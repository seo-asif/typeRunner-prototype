import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState<number>(1);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setcount((prev) => prev + 1)}> +</button>
      <button onClick={() => setcount((prev) => prev - 1)}> -</button>
    </div>
  );
};

export default Counter;
