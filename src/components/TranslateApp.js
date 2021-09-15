import React, { useState } from "react";
import Dropdown from "./DropDown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        label="Choose a language"
        options={options}
        selected={language}
        onSelectChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
