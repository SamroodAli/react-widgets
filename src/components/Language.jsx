import React from "react";

class Languages extends React.Component {
  state = { langauge: "english" };
  render() {
    return (
      <div>
        <div>
          Select a language:
          <i className="flag us"></i>
          <i className="flag nl"></i>
        </div>
      </div>
    );
  }
}
export default Languages;
