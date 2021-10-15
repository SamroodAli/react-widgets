import React from "react";

const Context = React.createContext("english");
export class LanguageStore extends React.Component {
  state = { language: "english" };
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageStore: this.onLanguageStore }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
