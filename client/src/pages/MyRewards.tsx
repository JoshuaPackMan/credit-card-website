import React, { Fragment, useState, useEffect } from "react";
import { RewardCard } from "../components/RewardCard";
import { UserCardsList } from "../components/UserCardsList";

export const MyRewards: React.FC<{}> = (props) => {
  const [userCards, setUserCards] = useState([""]);
  const sampleUserCards = ["Chase Sapphire Reserve", "Bank of America", "Visa"];

  useEffect(() => {
    setUserCards(sampleUserCards);
  }, [sampleUserCards]);

  return (
    <Fragment>
      <div className="columns is-centered">
        <div className="column has-background-black is-one-third">
          <UserCardsList userCards={userCards} />
        </div>
        <div className="column has-background-primary is-two-thirds">
          Second column
        </div>
      </div>
      {/*<RewardCard cardName="Chase Sapphire" reward="3% back at Walmart" />
      <RewardCard cardName="Bank of America" reward="2% back at Costco" />*/}
    </Fragment>
  );
};
