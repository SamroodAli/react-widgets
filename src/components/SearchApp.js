import React, { useState, useEffect } from "react";
import Wikipedia from "../api/wikipedia";
import SearchCards from "./SearchCard";

const SearchApp = () => {
  const [term, setTerm] = useState("Programming");
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDeboundedTerm] = useState(term);
  const delay = 500;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDeboundedTerm(term);
    }, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await Wikipedia.get("/api.php", {
        params: { srsearch: debouncedTerm },
      });
      setResults(data.query.search);
    };

    if (debouncedTerm) {
      search();
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  return (
    <div>
      <div className="ui form">
        <form className="field" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="">Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
      <div className="ui celled list">
        <SearchCards results={results} />
      </div>
    </div>
  );
};

export default SearchApp;
