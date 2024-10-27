import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;