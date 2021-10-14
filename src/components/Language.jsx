import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

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
        Changeable context
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        Hard-coded context
        <LanguageContext.Provider value="dutch">
          <UserCreate />
          Default context
        </LanguageContext.Provider>
        <UserCreate />
      </div>
    );
  }
}
export default Languages;
