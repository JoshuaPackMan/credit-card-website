import React from "react";

interface RewardsListProps {
  rewards: string[];
}

export const RewardsList: React.FC<RewardsListProps> = (RewardsListProps) => {
  return (
    <div className="content">
      <h3 style={{ marginTop: "1.5%" }}>Rewards:</h3>
      <ul>
        {RewardsListProps.rewards.map((reward, i) => (
          <li key={i}>{reward}</li>
        ))}
      </ul>
    </div>
    /*
    <div>
      {RewardsListProps.rewards.map((reward, i) => (
        <p key={i}>{reward}</p>
      ))}
    </div>
    */
  );
};
