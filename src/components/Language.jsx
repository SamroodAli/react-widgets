import React from "react";

class Languages extends React.Component {
  state = { langauge: "english" };

  onLanguageChange = (language) => {
    this.setState({ langauge: language });
  };

  render() {
    return (
      <div>
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
              this.onLanguage("dutch");
            }}
          ></i>
        </div>
      </div>
    );
  }
}
export default Languages;
