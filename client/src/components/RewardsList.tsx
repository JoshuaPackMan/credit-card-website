import React from "react";

interface RewardsListProps {
  rewards: string[];
  cardName: string;
}

export const RewardsList: React.FC<RewardsListProps> = (RewardsListProps) => {
  return (
    <div className="content rewards-list" style={{ width: "90%" }}>
      <h4 className="title is-4" style={{ marginTop: "1.5%" }}>
        {RewardsListProps.cardName}
      </h4>
      <h3 className="title is-5" style={{ marginTop: "1.5%" }}>
        Rewards:
      </h3>
      <ul>
        {RewardsListProps.rewards.map((reward, i) => (
          <li key={i}>{reward}</li>
        ))}
      </ul>
    </div>
  );
};
