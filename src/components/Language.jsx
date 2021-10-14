import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Languages extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
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
              this.onLanguageChange("dutch");
            }}
          ></i>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
export default Languages;
