import { configureStore } from "@reduxjs/toolkit";

// reducers
import app from "./app";
import modal from "./modal";
import auth from "./auth";

const store = configureStore({
  reducer: {
    app,
    modal,
    auth,
  }
})

export default store
