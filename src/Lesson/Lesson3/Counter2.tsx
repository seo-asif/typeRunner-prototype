import { ReactNode } from "react";

type CounterProp = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter2 = ({ setCount, children }: CounterProp) => {
  return (
    <>
      <h1> {children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> +</button>
      <button onClick={() => setCount((prev) => prev - 1)}> -</button>
    </>
  );
};

export default Counter2;
