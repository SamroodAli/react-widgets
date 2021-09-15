import React, { useState, useEffect } from "react";
import googleTranslate from "../api/translate";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await googleTranslate.post(
        "/",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return <h1>{translatedText}</h1>;
};

export default Convert;
