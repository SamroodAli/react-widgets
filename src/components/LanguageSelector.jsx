import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  onLanguageChange = (lang) => {
    this.context.onLanguageChange(lang);
  };

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => {
            this.onLanguageChange("english");
          }}
        ></i>
        <i
          className="flag nl"
          onClick={() => {
            this.onLanguageChange("dutch");
          }}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
