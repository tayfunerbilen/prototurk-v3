import { configureStore } from "@reduxjs/toolkit";

// reducers
import app from "./app";

const store = configureStore({
  reducer: {
    app
  }
})

export default store
