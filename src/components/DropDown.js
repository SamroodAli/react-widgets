import React from "react";

const Dropdown = ({ selected, onSelectChange, options }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div onClick={() => setOpen(!open)} className="ui selection dropdown">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu ">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
