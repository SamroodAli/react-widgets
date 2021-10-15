import React from "react";

class LanguageSelector extends React.Component {
  onLanguageChange = (lang) => {
    this.props.onLanguageChange(lang);
  };

  render() {
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
