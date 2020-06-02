import React from "react";

interface RewardCardProps {
  cardName: string;
  reward: string;
}

export const RewardCard: React.FC<RewardCardProps> = (RewardCardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p>
            <span>{RewardCardProps.cardName}</span>
          </p>
          <p>
            <span>{RewardCardProps.reward}</span>
          </p>
        </div>
      </div>
      <button className="button is-link">Track this Card</button>
      <br />
      <br />
    </div>
  );
};
