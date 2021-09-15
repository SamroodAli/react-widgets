import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Translate
      </a>
      <a href="/dropdown" className="item">
        Drop down
      </a>
      <a href="/search" className="item">
        Search Wiki
      </a>
      <a href="/accordion" className="item">
        Accordion
      </a>
    </div>
  );
};

export default Header;
