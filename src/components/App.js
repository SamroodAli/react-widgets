// import Accordion from "./Accordion";
// import Search from "./Search";
import Dropdown from "./DropDown";

// const items = [
//   {
//     title: "What is React ?",
//     content: "React is a front end framework",
//   },
//   {
//     title: "Why do we use React ?",
//     content: "React is a declarative framework",
//   },
//   {
//     title: "How do we use React ?",
//     content: "We use React by writing components",
//   },
// ];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  // return <Accordion items={items} />;
  // return <Search />;
  return <Dropdown options={options} />;
};

export default App;
