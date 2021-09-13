import React, { useState, useEffect } from "react";
import Wikipedia from "../api/wikipedia";
// import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const delay = 500;

  const searchWiki = async (term) => {
    const response = await Wikipedia.get("/api.php", {
      params: { srsearch: term },
    });
    setResults(response.data.query.search);
  };

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <a
            className="ui button right floated"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    setTimeout(() => {
      if (term) {
        searchWiki(term);
      }
    }, delay);
  }, [term]);

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
