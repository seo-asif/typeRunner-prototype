import { useState, useEffect, useCallback } from "react";

interface User {
  id: number;
  username: string;
}

const Lesson4 = () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("hello");

    return () => console.log("unmount");
  }, [user]);

  const addTwo = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      Lesson4
      <h1>{count}</h1>
      <button onClick={addTwo}></button>
    </div>
  );
};

export default Lesson4;
