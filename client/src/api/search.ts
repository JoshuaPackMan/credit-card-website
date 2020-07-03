import Axios from "axios";
import { SearchResults } from "../model/searchResults";
import { APIsearchResults } from "../model/APIsearchResults";

const APIkey = process.env.REACT_APP_CCStack_KEY;
const ccStackAPIURL = `https://api.ccstack.io/v1/search/cards?api_key=${APIkey}&query=`;

const mapAPIResultsToModel = (
  APIresults: APIsearchResults["results"]
): SearchResults[] => {
  let results: SearchResults[] = [];
  for (let i = 0; i < APIresults.length; i++) {
    let cardName: string = APIresults[i]["title"];
    let APIrewards = APIresults[i]["rewards"];
    //let rewardsList: Array<String> = [];
    let rewardsList: Array<string> = [];
    APIrewards.forEach((e) => {
      rewardsList.push(e["title"]);
    });
    let result: SearchResults = {
      cardName: cardName,
      rewards: rewardsList,
    };
    results.push(result);
  }
  return results;
};

export const searchAPI = async (
  searchText: string
): Promise<SearchResults[]> => {
  const promise = new Promise<SearchResults[]>((resolve, reject) => {
    try {
      Axios.get<APIsearchResults>(
        `${ccStackAPIURL}${searchText}`
      ).then((response) =>
        resolve(mapAPIResultsToModel(response.data.results))
      );
    } catch (ex) {
      reject(ex);
    }
  });

  return promise;
};
