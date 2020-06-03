import React from "react";

interface UserCardsListProps {
  userCards: string[];
}

export const UserCardsList: React.FC<UserCardsListProps> = (
  UserCardsListProps
) => {
  return (
    <div className="list list-column-content is-hoverable">
      {UserCardsListProps.userCards.map((card, i) => (
        <a key={i} className="list-item">
          {card}
        </a>
      ))}
    </div>
  );
};
