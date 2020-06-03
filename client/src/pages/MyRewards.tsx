import React, { Fragment, useState, useEffect } from "react";
import { RewardCard } from "../components/RewardCard";
import { UserCardsList } from "../components/UserCardsList";
import { RewardsList } from "../components/RewardsList";

export const MyRewards: React.FC<{}> = (props) => {
  const [userCards, setUserCards] = useState([""]);
  const [rewards, setRewards] = useState([""]);

  useEffect(() => {
    const sampleRewards = [
      "2% cash back at Walmart",
      "3x bonus points at Walmart",
    ];

    const sampleUserCards = [
      "Chase Sapphire Reserve",
      "Bank of America",
      "Visa",
    ];
    setUserCards(sampleUserCards);
    setRewards(sampleRewards);
  }, []);

  return (
    <Fragment>
      <div
        className="columns has-background-white is-centered"
        style={{ minHeight: "100vh" }}
      >
        <div className="column is-one-third">
          <UserCardsList userCards={userCards} />
        </div>
        <div className="column has-background-white is-two-thirds">
          <RewardsList rewards={rewards} />
        </div>
      </div>
      {/*<RewardCard cardName="Chase Sapphire" reward="3% back at Walmart" />
      <RewardCard cardName="Bank of America" reward="2% back at Costco" />*/}
    </Fragment>
  );
};
