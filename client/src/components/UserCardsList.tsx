import React from "react";

interface UserCardsListProps {
  userCards: string[];
}

export const UserCardsList: React.FC<UserCardsListProps> = (
  UserCardsListProps
) => {
  return (
    <div className="list-column-content box list">
      {UserCardsListProps.userCards.map((card, i) => (
        <div key={i} className="list-item">
          <button className="myCardsBtn">{card}</button>
        </div>
      ))}
    </div>
  );
};
