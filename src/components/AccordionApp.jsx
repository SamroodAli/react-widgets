import React from "react";
import Accordion from "./Accordion";

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

const AccordionApp = () => {
  return <Accordion items={items} />;
};

export default AccordionApp;
