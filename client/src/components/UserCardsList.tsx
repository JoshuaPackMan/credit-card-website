import React from "react";

interface UserCardsListProps {
  userCards: string[];
  onCardClick: (cardName: string) => void;
}

interface UserCardProps {
  cardName: string;
  onCardBtnClick: (cardName: string) => void;
}

const UserCard: React.FC<UserCardProps> = (props) => {
  const handleBtnClick = () => {
    props.onCardBtnClick(props.cardName);
  };
  return (
    <div className="list-item">
      <button className="myCardsBtn" onClick={handleBtnClick}>
        {props.cardName}
      </button>
    </div>
  );
};

export const UserCardsList: React.FC<UserCardsListProps> = (
  UserCardsListProps
) => {
  const handleClick = (cardName: string) => {
    UserCardsListProps.onCardClick(cardName);
  };
  return (
    <div className="list-column-content box list">
      {UserCardsListProps.userCards.map((card, i) => (
        <UserCard key={i} cardName={card} onCardBtnClick={handleClick} />
      ))}
    </div>
  );
};
