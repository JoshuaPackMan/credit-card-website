import React, { useEffect, useState } from "react";
import axios from "axios";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchResults } from "../model/searchResults";
import { APIsearchResults } from "../model/APIsearchResults";

export const Search: React.FC<{}> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [cards, setCards] = useState([""]);
  const [results, setResults] = useState<SearchResults[]>([]);
  const topLevelDivStyle = {
    width: "70%",
    margin: "0 auto",
    marginTop: "1%",
  };
  const inputStyle = {
    width: "80%",
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/public/authors/Tolkien/books")
      .then(function (response) {
        setCards(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
    const res = await axios.get(
      `https://api.ccstack.io/v1/search/cards?api_key=fbbee4a09e0811eab6d0812c92797c5f&query=${searchText}`
    );
    let results: SearchResults[] = [];
    const APIresults: APIsearchResults[] = res.data.results;
    for (let i = 0; i < APIresults.length; i++) {
      let cardName: string = APIresults[i]["title"];
      let APIrewards = APIresults[i]["rewards"];
      let rewardsList: Array<String> = [];
      APIrewards.forEach((e) => {
        rewardsList.push(e["title"]);
      });
      let result: SearchResults = {
        cardName: cardName,
        rewards: rewardsList,
      };
      results.push(result);
    }
    setResults(results);
  };

  return (
    <div style={topLevelDivStyle}>
      {cards.map((card, i) => (
        <p key={i} className="list-item">
          {/** TODO: what to do about the multiple results for searching something like Chase Sapphire?*/}
          {card}
        </p>
      ))}
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
      {results.map((reward, i) => (
        <div key={i} className="list-item">
          <h5 className="title is-5">{reward["cardName"]}</h5>
          <ul>
            {reward.rewards.map((r, m) => (
              <li key={m} className="list-item">
                {r}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
