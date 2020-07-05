import Axios from "axios";
import { backendAPIsearchResults } from "../model/backendAPIsearchResults";
import { SearchResults } from "../model/searchResults";

const backendURL = `${process.env.REACT_APP_SERVER_URL}/public/cards/`;

const mapAPIResultsToModel = (
  APIresult: backendAPIsearchResults
): SearchResults[] => {
  let results: SearchResults[] = [];
  let result: SearchResults = {
    cardName: APIresult.result.cardName,
    rewards: APIresult.result.rewards,
  };
  results.push(result);
  return results;
};

export const searchAPI = async (
  searchText: string
): Promise<SearchResults[]> => {
  const promise = new Promise<SearchResults[]>((resolve, reject) => {
    try {
      Axios.get<backendAPIsearchResults>(
        `${backendURL}${searchText}`
      ).then((response) => resolve(mapAPIResultsToModel(response.data)));
    } catch (ex) {
      reject(ex);
    }
  });

  return promise;
};
