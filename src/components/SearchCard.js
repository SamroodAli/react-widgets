const SearchCards = ({ results }) =>
  results.map((result) => {
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

export default SearchCards;
