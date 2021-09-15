import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    setTranslatedText(language + text);
  }, [language, text]);

  return <h1>{translatedText}</h1>;
};

export default Convert;
