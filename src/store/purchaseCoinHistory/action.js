import axios from "axios";

import { GET_PURCHASE_COIN_HISTORY } from "./types";

export const getPurchaseCoinHistory = () => (dispatch) => {
  axios
    .get("/history/admin/history")
    .then((res) => {
      console.log(res.data.data);
      dispatch({ type: GET_PURCHASE_COIN_HISTORY, payload: res.data.data });
    })
    .catch((error) => console.log(error));
};
