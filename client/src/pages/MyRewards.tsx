import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { getMyCards } from "../api/GETmyCards";
import { UserCardsList } from "../components/UserCardsList";
import { RewardsList } from "../components/RewardsList";

export const MyRewards: React.FC<{}> = () => {
  const [userCards, setUserCards] = useState([""]);
  const [rewards, setRewards] = useState([""]);

  const getAndSetUserCardsFromBackend = async () => {
    const cards = await getMyCards();
    //console.log(cards);
    setUserCards(cards);
  };

  useEffect(() => {
    getAndSetUserCardsFromBackend();
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
    </Fragment>
  );
};
