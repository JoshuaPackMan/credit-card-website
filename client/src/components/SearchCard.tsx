import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface SearchCardProps {
  onAddToMyCardsClick: (cardName: string) => void;
  cardName: string;
  rewards: Array<String>;
  btnClicked: boolean;
}

export const SearchCard: React.FC<SearchCardProps> = (props) => {
  const [btnClicked, setbtnClicked] = useState(false);
  console.log(props.btnClicked);
  const handleAddToMyCardsBtnClick = () => {
    setbtnClicked(true);
    props.onAddToMyCardsClick(props.cardName);
  };
  const addToMyCardsBtn = {
    margin: "0 auto",
    marginTop: "1%",
    marginBottom: "1%",
  };

  useEffect(() => {
    setbtnClicked(props.btnClicked);
  }, [props.cardName]);

  return (
    <div style={{ width: "100%" }}>
      <div className="card" style={{ width: "100%" }}>
        <div className="list-item">
          <h5 className="title is-5">{props.cardName}</h5>
          <ul>
            {props.rewards.map((r, m) => (
              <li key={m} className="list-item" style={{ textAlign: "left" }}>
                {r}
              </li>
            ))}
          </ul>
        </div>
        {btnClicked ? (
          <span className="icon is-small is-right">
            <i className="fas fa-home">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </span>
        ) : (
          <button
            onClick={handleAddToMyCardsBtnClick}
            className="button is-primary"
            style={addToMyCardsBtn}
          >
            Add this to My Cards
          </button>
        )}
      </div>
    </div>
  );
};
