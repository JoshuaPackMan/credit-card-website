import React, { Fragment, useState, useEffect, useCallback } from "react";
import { getMyCards } from "../api/GETmyCards";
import { UserCardsList } from "../components/UserCardsList";
import { RewardsList } from "../components/RewardsList";
import { SearchResults } from "../model/searchResults";
import { searchAPI } from "../api/search"; //CCStack
//import { searchAPI } from "../api/searchDB";

export const MyRewards: React.FC<{}> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCards, setUserCards] = useState([""]);
  const [userCardsWithRewards, setUserCardsWithRewards] = useState<
    SearchResults[]
  >([]);
  const [cardNameToDisplay, setCardNameToDisplay] = useState(
    "Select a card on the left to view its rewards."
  );
  const [rewardsToDisplay, setRewardsToDisplay] = useState([""]);

  const getAndSetUserCardsFromBackend = async () => {
    const cards = await getMyCards();
    setUserCards(cards);
  };

  const callAndSetRewardsForEachUserCard = useCallback(() => {
    // if the userCards have not yet been fetched from the backend:
    if (userCards.length === 1 && userCards[0] === "") {
      return;
    }

    let cardsWithRewards: SearchResults[] = [];

    userCards.forEach(async (cardName) => {
      let apiResults = await searchAPI(cardName);
      if (apiResults.length !== 0) {
        for (let i = 0; i < apiResults.length; i++) {
          if (cardName === apiResults[i].cardName) {
            cardsWithRewards.push(apiResults[i]);
            break;
          }
        }
      }
    });
    setUserCardsWithRewards(cardsWithRewards);
  }, [userCards]);

  const showCardRewardsBtnHandler = (cardName: string) => {
    setCardNameToDisplay(cardName);

    let i;
    for (i = 0; i < userCardsWithRewards.length; i++) {
      if (cardName === userCardsWithRewards[i].cardName) {
        setRewardsToDisplay(userCardsWithRewards[i].rewards);
        break;
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jwt") != null) {
      setIsLoggedIn(true);
    }
    getAndSetUserCardsFromBackend();
  }, []);

  useEffect(() => {
    callAndSetRewardsForEachUserCard();
  }, [callAndSetRewardsForEachUserCard]);

  return (
    <Fragment>
      {isLoggedIn ? (
        <div
          className="columns has-background-white is-centered"
          style={{ minHeight: "100vh" }}
        >
          <div className="column is-one-third">
            <UserCardsList
              userCards={userCards}
              onCardClick={showCardRewardsBtnHandler}
            />
          </div>
          <div className="column has-background-white is-two-thirds">
            <RewardsList
              rewards={rewardsToDisplay}
              cardName={cardNameToDisplay}
            />
          </div>
        </div>
      ) : (
        <h4
          className="subtitle"
          style={{ textAlign: "center", marginTop: "1%" }}
        >
          Please login or sign up to track cards and rewards.
        </h4>
      )}
    </Fragment>
  );
};
