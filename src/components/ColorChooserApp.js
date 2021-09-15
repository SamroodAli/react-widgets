// import Accordion from "./Accordion";
// import Search from "./Search";
import Dropdown from "./DropDown";
import { useState } from "react";

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

const ColorChooser = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <>
      <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle Dropdown
      </button>
      {showDropDown && (
        <Dropdown
          label="Choose a color"
          selected={selected}
          onSelectChange={setSelected}
          options={options}
        />
      )}
    </>
  );
};

export default ColorChooser;
