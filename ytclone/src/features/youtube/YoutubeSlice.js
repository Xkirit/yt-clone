import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState={
  video:[],
  currentPlaying: null,
  searchTerm:"",
  searchResults:[],
  nextPageToken: null,
  recommendedVideo: []
};

const YoutubeSlice = createSlice({
  name:'YoutubeApp',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{

    })
  }
})

export default YoutubeSlice.reducer;