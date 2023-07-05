import "./App.css";
import Heading from "./component/Heading";
import Footer from "./component/Footer";
import Middle from "./component/Middle";
import Lesson1 from "./Lesson1/Lesson1";

function App() {
  return (
    <>
      <div>Hello</div>
      <Heading title={"Asif"} />
      <Footer occupation={"Front End Engineer"} />
      <Middle extra={"Desktop It"} />
      <Lesson1 age={30} name={"Asif"} occupation={"job"} />
    </>
  );
}

export default App;
