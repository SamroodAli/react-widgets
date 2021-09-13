// import Accordion from "./Accordion";
// import Search from "./Search";
import Dropdown from "./DropDown";
import { useState } from "react";

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
  const [selected, setSelected] = useState(useState(options[0]));
  // return <Accordion items={items} />;
  // return <Search />;
  return (
    <Dropdown
      selected={selected}
      onSelectChange={setSelected}
      options={options}
    />
  );
};

export default App;
