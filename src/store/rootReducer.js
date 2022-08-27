import { combineReducers } from "redux";

import authSlice from "./oauth/authSlice";
import productReducer from "./productSlice/productSlice";
import alertSlice from "./alert/alertSlice";
import LoadingSlice from "./loading/LoadingSlice";
import userSlice from "./users/userSlice";

const rootReducer = combineReducers({
  oauth: authSlice,
  products: productReducer,
  alert: alertSlice,
  loading: LoadingSlice,
  users: userSlice,
});

export default rootReducer;
