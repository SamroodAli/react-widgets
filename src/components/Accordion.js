import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClicked = (index) => {
    console.log(index);
    return index;
  };

  const renderItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onItemClicked(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
