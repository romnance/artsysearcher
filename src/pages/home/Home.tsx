import React, { useState } from "react";
import "./home.css";
import MagnifyingGlass from "../../images/magnifying-glass.svg";
import Artists from "../../components/artists/Artists";
import ResetButton from "../../components/button/ResetButton";
import visitedPages from "../../common/visitedPages";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  function handleChange(e: { target: { value: string } }) {
    setQuery(e.target.value);
  }

  const reset = () => {
    visitedPages.resetHistory();
    setQuery("");
  };

  return (
    <div className="Page-container">
      <div className="Upper-block">
        <div className="Flex-row Top Show-child">
          <h1 className="Search-header">Art is a line around your thoughts</h1>
          <p>Gustav Klimt</p>
        </div>
        <div className="Search-container">
          <input
            spellCheck="false"
            autoFocus
            autoComplete="off"
            type="text"
            value={query}
            placeholder="Search by Artist Name"
            onChange={handleChange}
          />
          <div className="Icon-container">
            <img src={MagnifyingGlass} alt="Magnifying glass" />
          </div>
        </div>
      </div>
      <div className="Center Margins-vl">
        <ResetButton cb={reset} />
      </div>
      {query && <Artists term={query} />}
    </div>
  );
};

export default Home;
