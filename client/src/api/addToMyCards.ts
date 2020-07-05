import Axios from "axios";

export const addToMyCards = async (cardName: string) => {
  //let userName = localStorage.getItem("un"); // this is null when not signed in
  let jwt = localStorage.getItem("jwt"); // this is null when not signed in

  await Axios({
    method: "POST",
    url: `${process.env.REACT_APP_SERVER_URL}/user/cards/userCards`,
    data: {
      data: [cardName],
      type: "merge",
    },
    headers: { Authorization: `Bearer ${jwt}` },
  });
};
