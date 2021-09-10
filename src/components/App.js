// import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is React ?",
    content: "React is a front end framework",
  },
  {
    title: "Why do we use React ?",
    content: "React is a declarative framework",
  },
  {
    title: "How do we use React ?",
    content: "We use React by writing components",
  },
];

const App = () => {
  // return <Accordion items={items} />;
  return <Search />;
};

export default App;
