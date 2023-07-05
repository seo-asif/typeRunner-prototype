import "./App.css";
import Heading from "./component/Heading";
import Footer from "./component/Footer";
import Middle from "./component/Middle";
import Lesson1 from "./Lesson/Lesson1/Lesson1";
import Section from "./Lesson/Lesson2/Lesson2";
import Counter2 from "./Lesson/Lesson3/Counter2";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <div>Hello</div>
      <Heading title={"Asif"} />
      <Footer occupation={"Front End Engineer"} />
      <Middle extra={"Desktop It"} />
      <Lesson1 age={30} name={"Asif"} occupation={"job"} />
      <Section title={"Hello World"}>My name is Asif</Section>

      <Counter2 setCount={setCount}>count is {count}</Counter2>
    </>
  );
}

export default App;
