import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: AccountReducer,
    customer: customerReducer,
  },
});

export default store;
