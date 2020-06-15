import React from "react";

interface SearchCardProps {
  onAddToMyCardsClick: (cardName: string) => void;
  cardName: string;
  rewards: Array<String>;
}

export const SearchCard: React.FC<SearchCardProps> = (props) => {
  const handleAddToMyCardsBtnClick = () => {
    props.onAddToMyCardsClick(props.cardName);
  };
  const addToMyCardsBtn = {
    margin: "0 auto",
    marginTop: "1%",
    marginBottom: "1%",
  };

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
        <button
          onClick={handleAddToMyCardsBtnClick}
          className="button is-primary"
          style={addToMyCardsBtn}
        >
          Add this to My Cards
        </button>
      </div>
    </div>
  );
};
