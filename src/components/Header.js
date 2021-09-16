import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Translate
      </Link>
      <Link href="/dropdown" className="item">
        Drop down
      </Link>
      <Link href="/search" className="item">
        Search
      </Link>
      <Link href="/accordion" className="item">
        Accordion
      </Link>
    </div>
  );
};

export default Header;
