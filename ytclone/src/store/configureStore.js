import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "../features/youtube/YoutubeSlice";
export const store = configureStore({
  reducer: {
    youtubeApp: youtubeReducer,
  },
})
