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
  const [cardNameToDisplay, setCardNameToDisplay] = useState("");
  const [rewardsToDisplay, setRewardsToDisplay] = useState([""]);

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

  const getUserCardsAndRewards = useCallback(async () => {
    if (!isLoggedIn) {
      return;
    }
    const cards = await getMyCards();
    setUserCards(cards);

    let cardsWithRewards: SearchResults[] = [];

    for (let i = 0; i < cards.length; i++) {
      let cardName = cards[i];
      let apiResults = await searchAPI(cardName);
      if (apiResults.length !== 0) {
        for (let i = 0; i < apiResults.length; i++) {
          if (cardName === apiResults[i].cardName) {
            cardsWithRewards.push(apiResults[i]);
            break;
          }
        }
      }
    }

    setUserCardsWithRewards(cardsWithRewards);

    if (cardsWithRewards.length > 0) {
      setCardNameToDisplay(cardsWithRewards[0].cardName);
      setRewardsToDisplay(cardsWithRewards[0].rewards);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem("jwt") != null) {
      setIsLoggedIn(true);
    }
    getUserCardsAndRewards();
  }, [getUserCardsAndRewards]);

  const renderMyRewards = () => {
    if (isLoggedIn) {
      if (userCards.length === 0) {
        return (
          <div className="content rewards-list" style={{ width: "90%" }}>
            <h3
              className="subtitle"
              style={{ textAlign: "center", marginTop: "1%" }}
            >
              Cards you track will appear here. To track a card:
            </h3>
            <div style={{ margin: "0 auto", width: "30%" }}>
              <ul>
                <li>Click "Search" in the above navigation bar.</li>
                <li>Search for a card</li>
                <li>Click the "Add To My Cards" button</li>
              </ul>
            </div>
          </div>
        );
      } else {
        return (
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
        );
      }
    } else {
      return (
        <div style={{ textAlign: "center", marginTop: "1%" }}>
          <h3 className="title is-3">Young Money Finance Card Rewards</h3>
          <h4 className="subtitle" style={{ marginTop: "1%" }}>
            Please login or sign up to track cards.
          </h4>
          <h4 className="subtitle" style={{ marginTop: "1%" }}>
            Hit Search in the navigation bar above to explore rewards.
          </h4>
          <h4 className="subtitle" style={{ marginTop: "1%" }}>
            Cards you track will appear here.
          </h4>
        </div>
      );
    }
  };

  return <Fragment>{renderMyRewards()}</Fragment>;
};
