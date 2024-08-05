import { configureStore } from "@reduxjs/toolkit";
import YoutubeReducer from "../features/youtube/YoutubeSlice";
export const Store = configureStore({
  reducer: {
    YoutubeApp: YoutubeReducer,
  },
})
