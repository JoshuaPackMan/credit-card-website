import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchResults } from "../model/searchResults";
import { addToMyCards } from "../api/addToMyCards";
import { searchAPI } from "../api/search"; //CCStack
//import { searchAPI } from "../api/searchDB";
import { SearchCard } from "../components/SearchCard";

export const Search: React.FC<{}> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<SearchResults[]>([]);
  const topLevelDivStyle = {
    width: "70%",
    margin: "0 auto",
    marginTop: "1%",
  };
  const inputStyle = {
    width: "80%",
  };
  const addToMyCardsBtnHandler = (cardName: string) => {
    addToMyCards(cardName);
  };
  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleKeyDown = (e: any): any => {
    if (e.key === "Enter") {
      setSearchText(e.target.value);
      callCCStackAPIWithSearch();
    }
  };
  const callCCStackAPIWithSearch = async () => {
    let results = await searchAPI(searchText);
    setResults(results);
  };

  return (
    <div style={topLevelDivStyle}>
      <h4 className="title is-4">Search:</h4>
      <input
        className="input"
        style={inputStyle}
        type="text"
        placeholder="Chase Sapphire"
        onChange={updateSearch}
        onKeyDown={handleKeyDown}
      ></input>
      <button className="button" onClick={callCCStackAPIWithSearch}>
        <span className="icon is-small is-right">
          <i className="fas fa-home">
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </span>
      </button>
      {results.map((SearchResult, i) => (
        <SearchCard
          onAddToMyCardsClick={addToMyCardsBtnHandler}
          cardName={SearchResult.cardName}
          key={i}
          rewards={SearchResult.rewards}
        />
      ))}
    </div>
  );
};
