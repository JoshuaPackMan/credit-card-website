import Axios from "axios";

export const getMyCards = async (): Promise<Array<string>> => {
  const jwt = localStorage.getItem("jwt");
  const promise = new Promise<Array<string>>((resolve, reject) => {
    try {
      Axios.get(`${process.env.REACT_APP_SERVER_URL}/user/cards/userCards`, {
        headers: { Authorization: `Bearer ${jwt}` },
      }).then((response) => {
        resolve(response.data.result);
      });
    } catch (ex) {
      reject(ex);
    }
  });

  return promise;
};
