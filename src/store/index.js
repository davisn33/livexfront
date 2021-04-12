import { combineReducers } from "redux";

import dashboardReducer from "./dashboard/reducer";
import countryReducer from "./country/reducer";
import categoryReducer from "./category/reducer";
import emojiReducer from "./emoji/reducer";
import userReducer from "./user/reducer";
import giftReducer from "./gift/reducer";
import imageReducer from "./image/reducer";
import stickerReducer from "./sticker/reducer";
import planReducer from "./plan/reducer";
import adminReducer from "./admin/reducer";
import historyReducer from "./purchaseCoinHistory/reducer";

export default combineReducers({
  dashboard: dashboardReducer,
  admin: adminReducer,
  country: countryReducer,
  category: categoryReducer,
  emoji: emojiReducer,
  user: userReducer,
  gift: giftReducer,
  image: imageReducer,
  sticker: stickerReducer,
  plan: planReducer,
  history: historyReducer,
});
